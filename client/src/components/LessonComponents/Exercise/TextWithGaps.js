import React from 'react';
import InputWithDropArea from '../Input/InputWithDropArea';

const TextWithGaps = ({
  page,
  socket,
  roomId,
  TextWithGapsData,
  TextWithGapsOptions,
}) => {
  return (
    <div className='text-with-gaps'>
      {TextWithGapsData &&
        TextWithGapsData.map((data, i) => (
          <span key={i}>
            {data.before}
            <strong>{data.taskNum}</strong>
            <InputWithDropArea
              page={page}
              socket={socket}
              roomId={roomId}
              eventName={`exercise${i + 1}`}
              answers={data.ans}
              options={TextWithGapsOptions}
            />{' '}
            {data.after}
          </span>
        ))}
    </div>
  );
};

export default TextWithGaps;
