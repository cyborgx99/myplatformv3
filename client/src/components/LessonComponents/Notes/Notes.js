import React, { useEffect, useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import NotesButton from './NotesButton';
import './Notes.css';
import PropTypes from 'prop-types';

const Notes = ({ socket }) => {
  const [sharedNotes, setSharedNotes] = useState('');
  const [privateNotes, setPrivateNotes] = useState('');
  const [notesType, setNotesType] = useState('shared');

  const button = useRef('');

  useEffect(() => {
    socket.on('change', (msg) => {
      setSharedNotes(msg);
    });
  }, []);

  const sharedNotesChange = (e) => {
    setSharedNotes(e.target.value);
    socket.emit('inputs', e.target.value);
  };

  const onPaste = (e) => {
    e.preventDefault();
    // get text representation of clipboard
    var textOnly = (e.originalEvent || e).clipboardData.getData('text/plain');
    // insert text manually
    document.execCommand('insertHTML', false, textOnly);
  };

  const handleBlur = (e) => {
    button.current.click();
  };

  const handleClick = (e) => {};

  return (
    <div className='notes-container'>
      <div className='note-type'>
        <label className='container'>
          <input
            type='radio'
            name='shared'
            checked={notesType === 'shared'}
            value={notesType}
            onChange={(e) => setNotesType(e.target.name)}
          />
          <span className='checkmark'></span>
          Shared
        </label>
        <label className='container'>
          <input
            type='radio'
            checked={notesType === 'private'}
            name='private'
            value={notesType}
            onChange={(e) => setNotesType(e.target.name)}
          />
          <span className='checkmark'></span>
          Private
        </label>
      </div>

      <button
        ref={button}
        style={{ display: 'none' }}
        onClick={() => handleClick()}
      ></button>
      <div className='notes-btn-container'>
        <NotesButton className={'badge badge-primary'} cmd='italic' name='I' />
        <NotesButton className={'badge badge-primary'} cmd='bold' name='B' />
        <NotesButton
          className={'badge badge-primary'}
          cmd='strikeThrough'
          name='S'
        />
        <NotesButton
          className={'badge badge-primary'}
          cmd='underline'
          name='U'
        />
        <NotesButton
          className={'badge badge-black'}
          cmd='foreColor'
          arg='black'
          name=''
        />
        <NotesButton
          className={'badge badge-blue'}
          cmd='foreColor'
          arg='blue'
          name=''
        />
        <NotesButton
          className={'badge badge-red'}
          cmd='foreColor'
          arg='red'
          name=''
        />
        <NotesButton
          className={'badge badge-green'}
          cmd='foreColor'
          arg='ForestGreen'
          name=''
        />
        <NotesButton
          className={'badge badge-orange'}
          cmd='foreColor'
          arg='orange'
          name=''
        />
      </div>
      <ContentEditable
        className={
          notesType !== 'shared'
            ? 'display-none'
            : 'content-editable scroll-style-3'
        }
        onBlur={(e) => handleBlur(e)}
        onPaste={onPaste}
        tagName='pre'
        html={sharedNotes} // innerHTML of the editable div
        onChange={(e) => sharedNotesChange(e)} // handle innerHTML change
      />
      <ContentEditable
        className={
          notesType !== 'private'
            ? 'display-none'
            : 'content-editable scroll-style-3 private'
        }
        onBlur={(e) => handleBlur(e)}
        onPaste={onPaste}
        tagName='pre'
        html={privateNotes} // innerHTML of the editable div
        onChange={(e) => setPrivateNotes(e.target.value)} // handle innerHTML change
      />
    </div>
  );
};

Notes.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default Notes;
