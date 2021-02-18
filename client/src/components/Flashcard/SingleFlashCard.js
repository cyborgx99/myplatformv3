import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSyncAlt,
  faTimes,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { deleteFlashcard, updateFlashcard } from '../../actions/flashcard';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../actions/modal';
import CreateEditFlashcard from './CreateEditFlashcard';

const SingleFlashCard = ({
  flashcard,
  index,
  currentCard,
  gameMode,
  setCurrentCard,
}) => {
  const flashcardRef = useRef('');
  const dispatch = useDispatch();

  const [inputAnswer, setInputAnswer] = useState('');

  useEffect(() => {
    if (
      inputAnswer.toLocaleLowerCase() === flashcard.backSide.toLocaleLowerCase()
    ) {
      swal
        .fire({
          position: 'top-end',
          icon: 'success',
          title: 'Correct!',
          showConfirmButton: false,
          timer: 2000,
        })
        .then((result) => {
          /* Read more about handling dismissals below */
          const flashcardObject = {
            dateToShowCard: addDays(flashcard.showCardInDays + 1 || 1),
            showCardInDays: flashcard.showCardInDays + 1 || 1,
          };
          dispatch(updateFlashcard(flashcardObject, flashcard._id));
        });
    }
    // eslint-disable-next-line
  }, [inputAnswer]);

  const flipCard = (e) => {
    e.stopPropagation();
    flashcardRef.current.classList.toggle('show-answer');
  };

  const deleteFlashcardById = async (e) => {
    const confirmed = await swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it.',
    });
    const id = flashcard._id;
    if (confirmed.isConfirmed === true) {
      dispatch(deleteFlashcard(id));
      setCurrentCard(currentCard - 1);
    }
  };

  const currentCardClass = () => {
    if (index === currentCard) {
      return ' current-flashcard ';
    }
  };

  const addDays = (days) => {
    return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  };

  const correctAnswer = () => {
    if (inputAnswer === flashcard.backSide) {
      return true;
    }
  };

  const handleDeckClick = () => {
    dispatch(
      toggleModal('open', <CreateEditFlashcard flashCardToUpdate={flashcard} />)
    );
  };

  const SpeechRecogMic = () => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    // recognition.onstart = (e) => {
    //   setActiveMicroPhone(true);
    // };
    // recognition.onend = (e) => {
    //   setActiveMicroPhone(false);
    // };
    recognition.onresult = (e) => {
      const msg = e.results[0][0].transcript;
      setInputAnswer(msg);
    };
  };

  return (
    <div ref={flashcardRef} className={`flashcard-item ${currentCardClass()}`}>
      <div className='flashcard-inner'>
        <div className='flashcard-front'>
          <p
            onClick={() => handleDeckClick()}
            className='deck-name scroll-style-3'
          >
            {' '}
            (Deck: {flashcard.deckName}){' '}
          </p>
          <p className='scroll-style-3'> {flashcard.frontSide}</p>
          {gameMode === 'inputMode' && (
            <input
              placeholder='Type in your answer'
              disabled={correctAnswer()}
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
              className={`inputMode ${correctAnswer() && ' correct-answer '}`}
              type='text'
            />
          )}

          <FontAwesomeIcon
            className='flip-icon'
            onClick={(e) => flipCard(e)}
            icon={faSyncAlt}
          />
          <FontAwesomeIcon
            className='delete-icon'
            onClick={(e) => deleteFlashcardById(e)}
            icon={faTimes}
          />
          {gameMode === 'voiceMode' && (
            <>
              <span className={correctAnswer() && 'correct-answer'}>
                {' '}
                <FontAwesomeIcon
                  onClick={(e) => SpeechRecogMic(e)}
                  className='speak-icon'
                  icon={faVolumeUp}
                />
                {'    '}
                {inputAnswer || 'Speak'}{' '}
              </span>
            </>
          )}
        </div>
        <div className='flashcard-back'>
          <p
            onClick={() =>
              dispatch(
                toggleModal(
                  'open',
                  <CreateEditFlashcard flashCardToUpdate={flashcard} />
                )
              )
            }
            className='deck-name scroll-style-3'
          >
            (Deck: {flashcard.deckName}){' '}
          </p>
          <p className='scroll-style-3'> {flashcard.backSide} </p>
          <FontAwesomeIcon
            className='flip-icon'
            onClick={(e) => flipCard(e)}
            icon={faSyncAlt}
          />
          <FontAwesomeIcon
            className=' delete-icon'
            onClick={(e) => deleteFlashcardById(e)}
            icon={faTimes}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleFlashCard;
