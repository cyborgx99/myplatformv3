import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBirthdayCake,
  faBullseye,
  faGlobeAmericas,
  faInfoCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import { toggleModal } from '../../actions/modal';
import { uploadAvatar } from '../../actions/profile';
import AddAvatar from './AddAvatar';

const CreateProfile = ({ history }) => {
  const [formData, setFormData] = useState({
    skype: '',
    telegram: '',
    whatsApp: '',
    myHobbies: '',
    goals: '',
    birthday: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  });

  const {
    skype,
    telegram,
    whatsApp,
    goals,
    bio,
    birthday,
    myHobbies,
    facebook,
    linkedin,
    instagram,
    twitter,
  } = formData;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [newAvatar, setNewAvatar] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const uploadToCloudinary = async () => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_CLOUDINARY_API_ENDPOINT,
        {
          file: newAvatar,
          upload_preset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        }
      );
      console.log(data.url);
    } catch (err) {
      console.log(err);
      swal.fire({
        title: 'Something went wrong',
        text: 'Try to upload avatar again',
        icon: 'error',
      });
    }

    // const ffs = await dispatch(uploadAvatar(newAvatar));
    // console.log(ffs);
  };

  return (
    <form className='profile-content' onSubmit={(e) => onSubmit(e)}>
      <h2>Create Your Profile</h2>
      <small className='text-center'>
        <FontAwesomeIcon icon={faUser} /> Please tell us more about you
      </small>
      <AddAvatar setNewAvatar={setNewAvatar} newAvatar={newAvatar} />
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faSkype} color='#00aff0' /> Skype account:
        </small>
        <input
          type='text'
          placeholder='Skype'
          name='skype'
          value={skype}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faTelegram} color='#0088cc' /> Telegram
          account:
        </small>
        <input
          type='text'
          placeholder='Telegram'
          name='telegram'
          value={telegram}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faWhatsapp} color='#25D366' /> WhatsApp
          account:
        </small>
        <input
          type='text'
          placeholder='WhatsApp'
          name='whatsApp'
          value={whatsApp}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faGlobeAmericas} color='#34B7F1' /> Hobbies:
        </small>
        <input
          type='text'
          placeholder='Hobbies'
          name='myHobbies'
          value={myHobbies}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faBullseye} color='#FF0000' /> Goals:
        </small>
        <input
          type='text'
          placeholder='Goals'
          name='goals'
          value={goals}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faBirthdayCake} color='#FF00BF' /> Birthday:
        </small>
        <input
          type='date'
          placeholder='Birthday'
          name='birthday'
          value={birthday}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faInstagram} color='#E1306C' /> Instagram:
        </small>
        <input
          placeholder='Instagram'
          name='instagram'
          value={instagram}
          onChange={(e) => onChange(e)}
        ></input>
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faFacebook} color='#4267B2' /> Facebook:
        </small>
        <input
          placeholder='Facebook'
          name='facebook'
          value={facebook}
          onChange={(e) => onChange(e)}
        ></input>
      </div>

      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faLinkedin} color='#0e76a8' /> LinkedIn:
        </small>
        <input
          placeholder='LinkedIn'
          name='linkedin'
          value={linkedin}
          onChange={(e) => onChange(e)}
        ></input>
      </div>
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faTwitter} color='#1DA1F2' /> Twitter:
        </small>
        <input
          placeholder='Twitter'
          name='twitter'
          value={twitter}
          onChange={(e) => onChange(e)}
        ></input>
      </div>

      <div className='content-group'>
        <small className='form-text'>
          {' '}
          <FontAwesomeIcon icon={faInfoCircle} color='#555555' /> About me:
        </small>
        <textarea
          rows='4'
          placeholder='Additional information'
          name='bio'
          value={bio}
          onChange={(e) => onChange(e)}
        ></textarea>
      </div>

      <button
        onClick={() => dispatch(toggleModal('open', <CreateProfile />))}
        className='profile-btn'
      >
        Create Profile
      </button>
    </form>
  );
};

export default CreateProfile;
