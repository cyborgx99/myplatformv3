import {
  faTelegram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpen,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactUs } from '../../actions/auth';

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  return (
    <div className='credentials-content'>
      <h1 className='large text-center'>
        <span className='text-primary'>Contact</span> Us
      </h1>
      <p>
        <FontAwesomeIcon icon={faEnvelopeOpen} color='#0088cc' /> Please fill
        out the form below.
      </p>
      <form onSubmit={onSubmit}>
        <input
          required
          placeholder='Your Name'
          type='text'
          name='name'
          value={name}
          id='name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder='Your Email'
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          required
          value={message}
          rows='5'
          placeholder='Your Message'
          name='message'
          id='message'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
      <div className='box'>
        <p>
          <FontAwesomeIcon className='icon' icon={faTelegram} color='#0088cc' />
          <FontAwesomeIcon className='icon' icon={faWhatsapp} color='#25D366' />
          <FontAwesomeIcon className='icon' icon={faViber} color='#665cac' />:
          +380 95 744 2776
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelopeSquare} color='#0088cc' />:
          drew.mosheim@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactUsForm;
