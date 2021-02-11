import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFlashcards } from '../../actions/flashcard';
import { toggleModal } from '../../actions/modal';
import CreateEditFlashcard from './CreateEditFlashcard';
import SingleFlashCard from './SingleFlashCard';

const Flashcards = () => {
  const dispatch = useDispatch();

  const [currentCard, setCurrentCard] = useState(1);
  const [currentDeck, setCurrentDeck] = useState('');
  const [cardMode, setCardMode] = useState('allCards');
  const { flashcards } = useSelector((state) => state.flashcard);

  const deckArray = () => {
    if (currentDeck) {
      return flashcards.filter(
        (flashcard) => flashcard.deckName === currentDeck
      );
    } else {
      return flashcards;
    }
  };

  useEffect(() => {
    dispatch(getAllFlashcards());
    // eslint-disable-next-line
  }, []);

  const moveCardsLeft = () => {
    if (currentCard !== 1) {
      setCurrentCard(currentCard - 1);
    }
  };

  const moveCardsRight = () => {
    if (currentCard !== deckArray().length) {
      setCurrentCard(currentCard + 1);
    }
  };

  const selectedClass = (mode) => {
    if (cardMode === mode) {
      return 'selected-mode';
    }
  };

  const onDeckChange = (e) => {
    setCardMode(e.target.name);
    setCurrentDeck(e.target.value);
    setCurrentCard(1);
  };

  return (
    <div className='flashcard-container'>
      <button
        className='btn'
        onClick={(e) => dispatch(toggleModal('open', <CreateEditFlashcard />))}
      >
        Add New Card
      </button>
      <div className='flashcards'>
        <div className='mode-btn'>
          <button
            value=''
            name='allCards'
            onClick={(e) => onDeckChange(e)}
            className={`select-mode ${selectedClass('allCards')}`}
          >
            All Cards
          </button>
          <select
            value={currentDeck}
            name='deck'
            className={`select-mode ${selectedClass('deck')}`}
            onChange={(e) => onDeckChange(e)}
          >
            <option></option>
            {flashcards.map((flashcard, i) => (
              <option key={i} value={flashcard.deckName}>
                {flashcard.deckName}
              </option>
            ))}
          </select>
          <button
            name='inputMode'
            onClick={(e) => setCardMode(e.target.name)}
            className={`select-mode ${selectedClass('inputMode')}`}
          >
            Input Mode
          </button>
          <button
            name='voiceMode'
            onClick={(e) => setCardMode(e.target.name)}
            className={`select-mode ${selectedClass('voiceMode')}`}
          >
            Voice Mode
          </button>
        </div>
        {deckArray().map((flashcard, i) => (
          <SingleFlashCard
            key={i}
            index={i + 1}
            currentCard={currentCard}
            flashcard={flashcard}
          />
        ))}
        <div className='left-right-btns'>
          <span>
            <FontAwesomeIcon
              color='#07a0c3'
              onClick={(e) => moveCardsLeft(e)}
              icon={faLongArrowAltLeft}
            />{' '}
            {`${currentCard} / ${deckArray().length}`}{' '}
            <FontAwesomeIcon
              color='#07a0c3'
              onClick={(e) => moveCardsRight(e)}
              icon={faLongArrowAltRight}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
