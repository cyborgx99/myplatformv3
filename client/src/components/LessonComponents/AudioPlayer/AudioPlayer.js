import React, { useRef, useEffect, useState } from 'react';
import './AudioPlayer.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faForward,
  faPauseCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = ({ socket, source, eventChange, eventPlay }) => {
  const audioPlayer = useRef('1');
  const trackProgress = useRef('1');
  const volumeProgress = useRef('1');

  const [playerState, setPlayerState] = useState(0);
  const [volumeValue, setVolumeValue] = useState('0.5');
  const [progressValue, setProgressValue] = useState('0');

  useEffect(() => {
    // audio progress bar visual update
    setInterval(updateProgressBar, 10);

    socket.on(eventPlay, (msg) => {
      if (msg === 'play') {
        if (audioPlayer.current) {
          audioPlayer.current.play();
        }
      } else if (msg === 'pause') {
        if (audioPlayer.current) {
          audioPlayer.current.pause();
        }
      }
    });
    socket.on(eventChange, (msg) => {
      if (audioPlayer.current) {
        audioPlayer.current.currentTime = msg;
      }
    });
    //eslint-disable-next-line
  }, []);

  // audio progress bar visual update
  const updateProgressBar = () => {
    if (audioPlayer.current) {
      const progressPercentage =
        audioPlayer.current.currentTime / audioPlayer.current.duration;
      setProgressValue(progressPercentage);
    }
  };

  // digital clock input seconds
  const showTime = (inputSeconds) => {
    let hours = Math.floor(inputSeconds / 3600);
    let mins = Math.floor(inputSeconds / 60) - hours * 60;
    let secs = Math.floor(inputSeconds % 60);
    let output =
      hours.toString().padStart(2, '0') +
      ':' +
      mins.toString().padStart(2, '0') +
      ':' +
      secs.toString().padStart(2, '0');
    return output;
  };

  const PlayPauseButton = () => {
    if (audioPlayer.current.paused === true) {
      audioPlayer.current.play();
      if (socket) {
        const data = {
          eventName: eventPlay,
          value: 'play',
        };
        socket.emit('inputs', data);
      }
    } else {
      audioPlayer.current.pause();
      if (socket) {
        const data = {
          eventName: eventPlay,
          value: 'pause',
        };
        socket.emit('inputs', data);
      }
    }
  };

  // rewind / fast forward on bar click
  const updateProgressOnclick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var positiveX = -x > 0 ? -x : x;
    var perc = positiveX / 160;
    var updateBar = (audioPlayer.current.duration * perc).toFixed(6);
    //
    audioPlayer.current.currentTime = updateBar;
    if (socket) {
      const data = {
        eventName: eventChange,
        value: updateBar,
      };
      socket.emit('inputs', data);
    }
  };

  const timeForward = (time) => time + 10;
  const timeBackward = (time) => time - 10;

  // 10 second forward or rewind
  const handleTimeChange = (timeChange) => {
    const timeChanged = timeChange(audioPlayer.current.currentTime);
    audioPlayer.current.currentTime = timeChanged;
    if (socket) {
      const data = {
        eventName: eventChange,
        value: timeChanged,
      };
      socket.emit('inputs', data);
    }
  };

  // volume visual and actual change
  const updateVolume = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var positiveX = (-x > 0 ? -x : x).toFixed(0);
    setVolumeValue(positiveX / 100);
    audioPlayer.current.volume = positiveX / 100;
  };

  return (
    <div className='audio-player'>
      <audio
        onTimeUpdate={(e) => setPlayerState(e.target.currentTime)}
        ref={audioPlayer}
        src={source}
      ></audio>
      <button
        onClick={() => PlayPauseButton()}
        className='play controls button'
      >
        {audioPlayer.current.paused === true ? (
          <FontAwesomeIcon icon={faPlayCircle} />
        ) : (
          <FontAwesomeIcon icon={faPauseCircle} />
        )}
      </button>
      <button
        onClick={() => handleTimeChange(timeBackward)}
        className='backward'
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button onClick={() => handleTimeChange(timeForward)} className='forward'>
        <FontAwesomeIcon icon={faForward} />
      </button>
      <p className='progress-clock1'>{showTime(playerState)}</p>
      <p className='progress-clock2'>
        /{' '}
        {audioPlayer.current.duration
          ? showTime(audioPlayer.current.duration)
          : '00:00:00'}
      </p>
      <progress
        onClick={(event) => updateProgressOnclick(event)}
        ref={trackProgress}
        className='progress custom-progress'
        value={progressValue || ''}
        max={1}
      ></progress>
      <progress
        onClick={(event) => updateVolume(event)}
        ref={volumeProgress}
        className='volume custom-progress'
        value={volumeValue}
        max={1}
      ></progress>
    </div>
  );
};

AudioPlayer.propTypes = {
  socket: PropTypes.object.isRequired,
  eventPlay: PropTypes.string.isRequired,
  eventChange: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default AudioPlayer;
