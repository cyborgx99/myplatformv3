import React from 'react';
import DragItem from '../Input/DragItem';
import { shuffle } from './helperFunction';

const ListOfWordsHeader = ({ answers }) => {
  return (
    <div className='listOfWords-container'>
      {answers &&
        shuffle(answers).map((a, i) => <DragItem key={i} text={a[0]} />)}
    </div>
  );
};

export default ListOfWordsHeader;
