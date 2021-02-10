import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFlashcards } from '../../actions/flashcard';
import { toggleModal } from '../../actions/modal';
import CreateEditFlashcard from './CreateEditFlashcard';
import SingleFlashCard from './SingleFlashCard';

const Flashcards = () => {
  const dispatch = useDispatch();

  const { flashcards } = useSelector((state) => state.flashcard);

  useEffect(() => {
    dispatch(getAllFlashcards());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='flashcards'>
      <button
        onClick={(e) => dispatch(toggleModal('open', <CreateEditFlashcard />))}
      >
        Add New Card
      </button>
      {flashcards.map((flashcard, i) => (
        <SingleFlashCard key={i} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default Flashcards;
