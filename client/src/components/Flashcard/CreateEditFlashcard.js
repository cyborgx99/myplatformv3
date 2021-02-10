import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCard, updateFlashcard } from '../../actions/flashcard';

const CreateEditFlashcard = ({ flashCardToUpdate }) => {
  const [deckName, setDeckName] = useState(flashCardToUpdate.deckName || '');
  const [frontSide, setFrontSide] = useState(flashCardToUpdate.frontSide || '');
  const [backSide, setBackSide] = useState(flashCardToUpdate.backSide || '');

  const dispatch = useDispatch();

  const updateFlashcardById = async (e) => {
    const flashcardObject = {
      deckName,
      frontSide,
      backSide,
    };
    const id = flashCardToUpdate._id;
    dispatch(updateFlashcard(flashcardObject, id));
  };
  const createNewFlashCard = () => {
    const flashcardObject = {
      deckName,
      frontSide,
      backSide,
    };
    dispatch(createNewCard(flashcardObject));
  };

  return (
    <div className='create-update-flashcard'>
      {flashCardToUpdate ? (
        <h3>Update Flashcard</h3>
      ) : (
        <h3>Add New FlashCard</h3>
      )}
      <span>Deck:</span>
      <input
        type='text'
        placeholder='Deck'
        name='deck'
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
      />
      <span>Front Side:</span>
      <input
        type='text'
        placeholder='Front Side'
        name='frontSide'
        value={frontSide}
        onChange={(e) => setFrontSide(e.target.value)}
      />
      <span>Back Side:</span>
      <input
        type='text'
        placeholder='Back Side'
        name='backSide'
        value={backSide}
        onChange={(e) => setBackSide(e.target.value)}
      />
      {flashCardToUpdate ? (
        <button className='btn' onClick={(e) => updateFlashcardById()}>
          Update FlashCard
        </button>
      ) : (
        <button className='btn' onClick={(e) => createNewFlashCard()}>
          Add New FlashCard
        </button>
      )}
    </div>
  );
};

CreateEditFlashcard.defaultProps = {
  flashCardToUpdate: '',
};

export default CreateEditFlashcard;
