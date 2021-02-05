import React from 'react';
import InputWithDropArea from '../Input/InputWithDropArea';

const Exercise = ({ page, socket, roomId, exerciseData, exerciseInText }) => {
  return (
    <div className='exercise'>
      {exerciseData &&
        exerciseData.map((data, i) => (
          <span key={i}>
            {i + 1}. {data.before}{' '}
            <InputWithDropArea
              page={page}
              socket={socket}
              roomId={roomId}
              eventName={`exercise${i + 1}`}
              answers={data.ans}
            />{' '}
            {data.after}{' '}
          </span>
        ))}
      {exerciseInText &&
        exerciseInText.map((text, i) => (
          <span className='exercise-in-text' key={i}>
            {text.before}{' '}
            <InputWithDropArea
              page={page}
              socket={socket}
              roomId={roomId}
              eventName={`${i}`}
              answers={text.ans}
            />{' '}
            {text.after}{' '}
          </span>
        ))}
    </div>
  );
};

export default Exercise;
