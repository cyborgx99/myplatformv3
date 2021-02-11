import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faSyncAlt,
  faTimes,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { deleteFlashcard } from '../../actions/flashcard';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../actions/modal';
import CreateEditFlashcard from './CreateEditFlashcard';

const SingleFlashCard = ({ flashcard, index, currentCard, currentDeck }) => {
  const flashcardRef = useRef('');

  const dispatch = useDispatch();

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
    }
  };

  const currentCardClass = () => {
    if (index === currentCard) {
      return ' current-flashcard ';
    }
  };

  return (
    <div ref={flashcardRef} className={`flashcard-item ${currentCardClass()}`}>
      <div className='flashcard-inner'>
        <div className='flashcard-front'>
          <p className='deck-name scroll-style-3'>
            {' '}
            (Deck: {flashcard.deckName}){' '}
          </p>
          <p className='scroll-style-3'> {flashcard.frontSide}</p>
          <FontAwesomeIcon
            className='flip-icon'
            onClick={(e) => flipCard(e)}
            icon={faSyncAlt}
          />
          <FontAwesomeIcon
            className='edit-icon'
            onClick={(e) =>
              dispatch(
                toggleModal(
                  'open',
                  <CreateEditFlashcard flashCardToUpdate={flashcard} />
                )
              )
            }
            icon={faEdit}
          />
          <FontAwesomeIcon
            className='delete-icon'
            onClick={(e) => deleteFlashcardById(e)}
            icon={faTimes}
          />
          <FontAwesomeIcon className='speak-icon' icon={faVolumeUp} />
        </div>
        <div className='flashcard-back'>
          <p className='deck-name scroll-style-3'>
            (Deck: {flashcard.deckName}){' '}
          </p>
          <p className='scroll-style-3'> {flashcard.backSide} </p>
          <FontAwesomeIcon
            className='flip-icon'
            onClick={(e) => flipCard(e)}
            icon={faSyncAlt}
          />
          <FontAwesomeIcon
            className=' edit-icon'
            onClick={(e) =>
              dispatch(
                toggleModal(
                  'open',
                  <CreateEditFlashcard flashCardToUpdate={flashcard} />
                )
              )
            }
            icon={faEdit}
          />
          <FontAwesomeIcon
            className=' delete-icon'
            onClick={(e) => deleteFlashcardById(e)}
            icon={faTimes}
          />
          <FontAwesomeIcon className=' speak-icon' icon={faVolumeUp} />
        </div>
      </div>
    </div>
  );
};

export default SingleFlashCard;
