import React, { useEffect, useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import NotesButton from './NotesButton';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getCurrentLessonData, saveNotes } from '../../../actions/lesson';
import { useDispatch, useSelector } from 'react-redux';

const Notes = React.memo(({ socket, eventName }) => {
  const lesson = useSelector((state) => state.lesson);

  const [sharedNotes, setSharedNotes] = useState(lesson.sharedNotes || '');
  const [privateNotes, setPrivateNotes] = useState(lesson.privateNotes || '');
  const [notesType, setNotesType] = useState('shared');

  const button = useRef('');

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const lessonName = pathname;

  useEffect(() => {
    // add event listener to save notes when page reloads
    window.addEventListener('beforeunload', handleBlur);
    dispatch(getCurrentLessonData(lessonName));

    if (socket) {
      socket.on(eventName, (value) => {
        setSharedNotes(value);
      });
    }

    return () => {
      // remove listener when leaving the page
      window.removeEventListener('beforeunload', handleBlur);
    };

    // eslint-disable-next-line
  }, []);

  console.log('Notes');

  const sharedNotesChange = (e) => {
    setSharedNotes(e.target.value);
    if (socket) {
      const data = {
        eventName,
        value: e.target.value,
      };

      socket.emit('inputs', data);
    }
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

  const handleClick = (e) => {
    const notesObject = {
      lessonName,
      sharedNotes,
      privateNotes,
    };
    dispatch(saveNotes(notesObject));
  };

  const selectedClass = (mode) => {
    if (notesType === mode) {
      return ' notes-selected ';
    }
  };

  return (
    <>
      <div className='note-type'>
        <button
          onClick={(e) => setNotesType('shared')}
          className={`notes-select ${selectedClass('shared')}`}
        >
          Shared
        </button>
        <button
          onClick={(e) => setNotesType('private')}
          className={`notes-select ${selectedClass('private')}`}
        >
          Private
        </button>
      </div>
      <button
        ref={button}
        style={{ display: 'none' }}
        onClick={() => handleClick()}
      ></button>
      <div
        onMouseDown={(e) => e.preventDefault()}
        className='notes-btn-container'
      >
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
            : 'content-editable scroll-style-1'
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
            : 'content-editable scroll-style-1 private'
        }
        onBlur={(e) => handleBlur(e)}
        onPaste={onPaste}
        tagName='pre'
        html={privateNotes} // innerHTML of the editable div
        onChange={(e) => setPrivateNotes(e.target.value)} // handle innerHTML change
      />
    </>
  );
});

Notes.propTypes = {
  socket: PropTypes.object.isRequired,
  eventName: PropTypes.string.isRequired,
};

export default Notes;
