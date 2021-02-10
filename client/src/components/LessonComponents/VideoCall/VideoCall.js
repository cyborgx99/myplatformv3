import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash,
} from '@fortawesome/free-solid-svg-icons';

const VideoCall = React.memo(({ roomId }) => {
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  const otherUser = useRef();
  const userStream = useRef();
  const socketRef = useRef();

  const [mutedMic, setMutedMic] = useState(false);
  const [offMyCamera, setOffMyCamera] = useState(false);
  const [otherUserOffCamera, setOtherUserOffCamera] = useState(true);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        userStream.current = stream;

        socketRef.current = io.connect('/video');
        socketRef.current.emit('join room', roomId);
        socketRef.current.on('other user', (userID) => {
          callUser(userID);
          otherUser.current = userID;
        });
        socketRef.current.on('user joined', (userID) => {
          otherUser.current = userID;
          setOtherUserOffCamera(false);
        });

        socketRef.current.on('offer', handleRecieveCall);
        socketRef.current.on('answer', handleAnswer);
        socketRef.current.on('ice-candidate', handleNewICECandidateMsg);
        socketRef.current.on('partnerDisconnect', handlePartnerDisconnect);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      // disconnect socket
      socketRef.current && socketRef.current.close();
      // stop using users mic and camera
      userStream.current &&
        userStream.current.getTracks().forEach(function (track) {
          track.stop();
        });
      window.removeEventListener('beforeunload', handleUnload);
    };
    //eslint-disable-next-line
  }, []);

  function handlePartnerDisconnect() {
    setOtherUserOffCamera(true);
  }

  function callUser(userID) {
    peerRef.current = createPeer(userID);
    userStream.current
      .getTracks()
      .forEach((track) => peerRef.current.addTrack(track, userStream.current));
  }

  function createPeer(userID) {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org',
        },
        {
          urls: 'turn:numb.viagenie.ca',
          credential: 'muazkh',
          username: 'webrtc@live.com',
        },
      ],
    });

    peer.onicecandidate = handleICECandidateEvent;
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

    return peer;
  }

  function handleNegotiationNeededEvent(userID) {
    peerRef.current
      .createOffer()
      .then((offer) => {
        return peerRef.current.setLocalDescription(offer);
      })
      .then(() => {
        const payload = {
          target: userID,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit('offer', payload);
      })
      .catch((e) => console.log(e));
  }

  function handleRecieveCall(incoming) {
    peerRef.current = createPeer();
    const desc = new RTCSessionDescription(incoming.sdp);
    peerRef.current
      .setRemoteDescription(desc)
      .then(() => {
        userStream.current
          .getTracks()
          .forEach((track) =>
            peerRef.current.addTrack(track, userStream.current)
          );
      })
      .then(() => {
        return peerRef.current.createAnswer();
      })
      .then((answer) => {
        return peerRef.current.setLocalDescription(answer);
      })
      .then(() => {
        const payload = {
          target: incoming.caller,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit('answer', payload);
      });
  }

  function handleAnswer(message) {
    const desc = new RTCSessionDescription(message.sdp);
    peerRef.current.setRemoteDescription(desc).catch((e) => console.log(e));
  }

  function handleICECandidateEvent(e) {
    if (e.candidate) {
      const payload = {
        target: otherUser.current,
        candidate: e.candidate,
      };
      setOtherUserOffCamera(false);
      socketRef.current.emit('ice-candidate', payload);
    }
  }

  function handleNewICECandidateMsg(incoming) {
    const candidate = new RTCIceCandidate(incoming);

    peerRef.current.addIceCandidate(candidate).catch((e) => console.log(e));
  }

  function handleTrackEvent(e) {
    partnerVideo.current.srcObject = e.streams[0];
  }

  const toggleMic = (e) => {
    userStream.current.getAudioTracks()[0].enabled = !userStream.current.getAudioTracks()[0]
      .enabled;
    setMutedMic(!mutedMic);
  };

  const toggleMyCamera = (e) => {
    userStream.current.getVideoTracks()[0].enabled = !userStream.current.getVideoTracks()[0]
      .enabled;
    setOffMyCamera(!offMyCamera);
  };

  const handleUnload = () => {
    // disconnect socket manually!
    socketRef.current.close();
  };

  console.log('VideoCall');

  return (
    <div className='videoChat-container'>
      <div className='videoChat-buttons'>
        <button onClick={(e) => toggleMic(e)}>
          {mutedMic ? (
            <FontAwesomeIcon className='button-icon' icon={faMicrophoneSlash} />
          ) : (
            <FontAwesomeIcon className='button-icon' icon={faMicrophone} />
          )}
        </button>
        <button onClick={(e) => toggleMyCamera(e)}>
          {offMyCamera ? (
            <FontAwesomeIcon className='button-icon' icon={faVideoSlash} />
          ) : (
            <FontAwesomeIcon className='button-icon' icon={faVideo} />
          )}
        </button>
      </div>
      <div className='videoChat-user'>
        <video muted autoPlay ref={userVideo} />
        {offMyCamera && (
          <img
            alt='vid'
            src='https://res.cloudinary.com/cyborgx999/image/upload/v1607471745/sayprivet/user-3331256_1280_wbgayg.png'
          ></img>
        )}
      </div>
      <div className='videoChat-otherUser'>
        <video playsInline autoPlay ref={partnerVideo} />
        {otherUserOffCamera && (
          <img
            alt='vid'
            src='https://res.cloudinary.com/cyborgx999/image/upload/v1607471745/sayprivet/user-3331256_1280_wbgayg.png'
          ></img>
        )}
      </div>
    </div>
  );
});

VideoCall.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default VideoCall;
