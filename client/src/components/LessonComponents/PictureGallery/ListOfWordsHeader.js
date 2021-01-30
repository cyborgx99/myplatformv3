import React from 'react';
import DragItem from '../Input/DragItem';

const ListOfWordsHeader = ({ answer }) => {
  return (
    <>
      {answer.a1 && <DragItem text={answer.a1} />}
      {answer.a3 && <DragItem text={answer.a3} />}
      {answer.a12 && <DragItem text={answer.a12} />}
      {answer.a8 && <DragItem text={answer.a8} />}
      {answer.a7 && <DragItem text={answer.a7} />}
      {answer.a6 && <DragItem text={answer.a6} />}
      {answer.a4 && <DragItem text={answer.a4} />}
      {answer.a5 && <DragItem text={answer.a5} />}
      {answer.a9 && <DragItem text={answer.a9} />}
      {answer.a11 && <DragItem text={answer.a11} />}
      {answer.a10 && <DragItem text={answer.a10} />}
      {answer.a2 && <DragItem text={answer.a2} />}
    </>
  );
};

export default ListOfWordsHeader;
