import React from 'react';
import DragItem from '../Input/DragItem';

const ListOfWordsHeader = ({ answers }) => {
  return (
    <div className='listOfWords-container'>
      {answers.a1 && <DragItem text={answers.a1[0]} />}
      {answers.a3 && <DragItem text={answers.a3[0]} />}
      {answers.a12 && <DragItem text={answers.a12[0]} />}
      {answers.a8 && <DragItem text={answers.a8[0]} />}
      {answers.a7 && <DragItem text={answers.a7[0]} />}
      {answers.a6 && <DragItem text={answers.a6[0]} />}
      {answers.a4 && <DragItem text={answers.a4[0]} />}
      {answers.a5 && <DragItem text={answers.a5[0]} />}
      {answers.a9 && <DragItem text={answers.a9[0]} />}
      {answers.a11 && <DragItem text={answers.a11[0]} />}
      {answers.a10 && <DragItem text={answers.a10[0]} />}
      {answers.a2 && <DragItem text={answers.a2[0]} />}
    </div>
  );
};

export default ListOfWordsHeader;
