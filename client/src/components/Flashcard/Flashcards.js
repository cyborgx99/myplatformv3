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
  const [gameMode, setGameMode] = useState('');
  const { flashcards } = useSelector((state) => state.flashcard);

  const deckArray = () => {
    const filterByDeck = () => {
      if (currentDeck) {
        const singleDeck = flashcards.filter(
          (flashcard) => flashcard.deckName === currentDeck
        );
        return singleDeck;
      } else {
        return flashcards;
      }
    };

    if (gameMode) {
      return filterByDeck().filter(
        (flashcard) => flashcard.dateToShowCard < new Date().toISOString()
      );
    } else {
      return filterByDeck();
    }
  };

  // remove duplicates of deckNames from the array of all flashcards
  const deckNames = () => {
    if (gameMode) {
      return [...new Set(deckArray().map((flashcard) => flashcard.deckName))];
    } else {
      return [...new Set(flashcards.map((flashcard) => flashcard.deckName))];
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
    if (currentCard < deckArray().length) {
      setCurrentCard(currentCard + 1);
    }
  };

  const selectedCardClass = (mode) => {
    if (cardMode === mode) {
      return 'selected-mode';
    }
  };
  const selectedGameClass = (mode) => {
    if (gameMode === mode) {
      return 'selected-game-mode';
    }
  };

  const onDeckChange = (e) => {
    setCardMode(e.target.name);
    setCurrentDeck(e.target.value);
    setCurrentCard(1);
  };

  return (
    <div className='flashcard-container'>
      <div className='flashcards'>
        <div className='mode-btn'>
          <button
            value=''
            name='allCards'
            onClick={(e) => onDeckChange(e)}
            className={`select-mode ${selectedCardClass('allCards')}`}
          >
            All Cards
          </button>
          <select
            value={currentDeck}
            name='deck'
            className={`select-mode ${selectedCardClass('deck')}`}
            onChange={(e) => onDeckChange(e)}
          >
            <option></option>
            {deckNames().map((flashcard, i) => (
              <option key={i} value={flashcard}>
                {flashcard}
              </option>
            ))}
          </select>
          <button
            name='inputMode'
            onClick={(e) =>
              setGameMode(e.target.name !== gameMode ? e.target.name : '')
            }
            className={`select-mode ${selectedGameClass('inputMode')}`}
          >
            Input Mode
          </button>
          <button
            name='voiceMode'
            onClick={(e) =>
              setGameMode(e.target.name !== gameMode ? e.target.name : '')
            }
            className={`select-mode ${selectedGameClass('voiceMode')}`}
          >
            Voice Mode
          </button>
        </div>
        {deckArray().length === 0 ? (
          <div className='flashcard-item current-flashcard'>
            <div className='flashcard-inner'>
              <div className='flashcard-front'>
                <span>No cards for revision today</span>
              </div>
            </div>
          </div>
        ) : (
          deckArray().map((flashcard, i) => (
            <SingleFlashCard
              key={flashcard._id}
              index={i + 1}
              gameMode={gameMode}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              flashcard={flashcard}
            />
          ))
        )}
        {deckArray().length !== 0 && (
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
        )}
        <button
          className='btn'
          onClick={(e) =>
            dispatch(toggleModal('open', <CreateEditFlashcard />))
          }
        >
          Add New Card
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
