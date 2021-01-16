import React, { useRef } from 'react';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AddAvatar = ({ newAvatar, currentAvatar, setNewAvatar }) => {
  const hiddenInput = useRef('');

  const handleClick = (e) => {
    e.preventDefault();
    hiddenInput.current.click();
  };

  const handleFileInput = (e) => {
    // it should be 600kb or less
    if (e.target.files[0] && e.target.files[0].size > 622111) {
      swal.fire({
        text: 'Avatar should be less than 600kb!',
        icon: 'warning',
      });
    } else {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
    }
  };

  return (
    <div className='add-avatar-container'>
      <img src={newAvatar ? newAvatar : currentAvatar} alt='avatar' />
      <input
        type='file'
        name='avatar'
        hidden={true}
        ref={hiddenInput}
        onChange={(e) => handleFileInput(e)}
      />
      <button
        onClick={(e) => handleClick(e)}
        className='profile-btn'
        type='submit'
      >
        Select Avatar
      </button>
    </div>
  );
};

AddAvatar.defaultProps = {
  currentAvatar:
    'https://res.cloudinary.com/cyborgx999/image/upload/v1600122730/sayprivet/ujjxn9rmbuknai9u5vao.png',
};

export default AddAvatar;
