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
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../../components/Spinner/Spinner';
import { formatDate } from '../../utility/expenseTrackerHelpers';

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
    // eslint-disable-next-line
  }, []);

  if (profile.loading === true) return <Spinner />;

  return (
    <div className='my-profile-info'>
      <img
        className='round-img my-1'
        src={
          profile.avatar ||
          'https://res.cloudinary.com/cyborgx999/image/upload/v1600122730/sayprivet/ujjxn9rmbuknai9u5vao.png'
        }
        alt='avatar'
      />
      <h1>My Profile:</h1>
      {profile.skype && (
        <div className='profile-item'>
          <h3>
            <FontAwesomeIcon icon={faSkype} color='#00aff0' /> Skype:
          </h3>
          <p>{profile && profile.skype}</p>
        </div>
      )}
      {profile.telegram && (
        <div className='profile-item'>
          <h3>
            <FontAwesomeIcon icon={faTelegram} color='#0088cc' /> Telegram:
          </h3>
          <p>{profile && profile.telegram}</p>
        </div>
      )}
      {profile.whatsApp && (
        <div className='profile-item'>
          <h3>
            <FontAwesomeIcon icon={faWhatsapp} color='#25D366' /> WhatsApp:
          </h3>
          <p> {profile && profile.whatsApp}</p>
        </div>
      )}
      {profile.myHobbies && (
        <div className='profile-item'>
          <h3>
            <FontAwesomeIcon icon={faGlobeAmericas} color='#34B7F1' /> Hobbies:
          </h3>
          <p>{profile && profile.myHobbies}</p>
        </div>
      )}

      {profile.goals && (
        <div className='profile-item'>
          <h3>
            <FontAwesomeIcon icon={faBullseye} color='#FF0000' /> Goals:
          </h3>
          <p>{profile && profile.goals}</p>
        </div>
      )}

      {profile.birthday && (
        <div className='profile-item'>
          <h3>
            <FontAwesomeIcon icon={faBirthdayCake} color='#FF00BF' /> Birthday:
          </h3>
          <p>{profile && formatDate(profile.birthday)}</p>
        </div>
      )}

      {profile && profile.instagram && (
        <a href={profile.instagram} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} color='#E1306C' />
        </a>
      )}

      {profile && profile.facebook && (
        <a href={profile.facebook} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} color='#4267B2' />
        </a>
      )}

      {profile && profile.linkedin && (
        <a href={profile.linkedin} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} color='#0e76a8' />
        </a>
      )}

      {profile && profile.twitter && (
        <a href={profile.twitter} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} color='#1DA1F2' />
        </a>
      )}

      {profile && profile.bio && (
        <div className='profile-item'>
          <h3>
            <FontAwesomeIcon icon={faInfoCircle} color='#555555' /> About me:
          </h3>
          <p>{profile && profile.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
