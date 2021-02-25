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
import { createUserProfile, updateUserProfile } from '../../actions/profile';
import AddAvatar from './AddAvatar';

const CreateUpdateProfile = ({ history }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [newAvatar, setNewAvatar] = useState('');
  const [formData, setFormData] = useState({
    skype: profile.skype || '',
    telegram: profile.telegram || '',
    whatsApp: profile.whatsApp || '',
    myHobbies: profile.myHobbies || '',
    goals: profile.goals || '',
    birthday: profile.birthday || '',
    bio: profile.bio || '',
    twitter: profile.twitter || '',
    facebook: profile.facebook || '',
    linkedin: profile.linkedin || '',
    instagram: profile.instagram || '',
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
      let avatar;
      avatar = data.url;
      const profileObj = {
        avatar,
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
      };
      if (profile.profileId) {
        const id = profile.profileId;
        dispatch(updateUserProfile(profileObj, id));
      } else {
        dispatch(createUserProfile(profileObj));
      }
    } catch (err) {
      console.log(err);
      swal.fire({
        title: 'Something went wrong',
        text: 'Try to upload avatar again',
        icon: 'error',
      });
    }
  };

  const submitCreateProfileForm = (e) => {
    e.preventDefault();
    if (newAvatar) {
      uploadToCloudinary();
    } else {
      dispatch(createUserProfile(formData));
    }
  };

  const submitUpdateProfileForm = (e) => {
    e.preventDefault();
    if (newAvatar) {
      uploadToCloudinary();
    } else {
      const id = profile.profileId;
      dispatch(updateUserProfile(formData, id));
    }
  };

  return (
    <form className='profile-content'>
      {profile.profileId ? (
        <h2>Update Your Profile</h2>
      ) : (
        <h2>Create Your Profile</h2>
      )}
      <small className='text-center'>
        <FontAwesomeIcon icon={faUser} /> Please tell us more about you
      </small>
      <AddAvatar
        currentAvatar={profile.avatar}
        setNewAvatar={setNewAvatar}
        newAvatar={newAvatar}
      />
      <div className='content-group'>
        <small className='form-text'>
          <FontAwesomeIcon icon={faSkype} color='#00aff0' /> Skype:
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
          <FontAwesomeIcon icon={faTelegram} color='#0088cc' /> Telegram:
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
          <FontAwesomeIcon icon={faWhatsapp} color='#25D366' /> WhatsApp:
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

      {profile.profileId ? (
        <button
          onClick={(e) => submitUpdateProfileForm(e)}
          className='btn-long'
        >
          Update Profile
        </button>
      ) : (
        <button
          onClick={(e) => submitCreateProfileForm(e)}
          className='btn-long'
        >
          Create Profile
        </button>
      )}
    </form>
  );
};

export default CreateUpdateProfile;
