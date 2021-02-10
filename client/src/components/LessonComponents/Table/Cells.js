import React from 'react';
import InputWithDropArea from '../Input/InputWithDropArea';

const Cells = ({ cellData, socket, page, roomId }) => {
  return (
    <>
      {cellData &&
        cellData.map((data, i) => (
          <td key={i}>
            {data.text || null}
            {data.ans && (
              <InputWithDropArea
                socket={socket}
                page={page}
                answers={data.ans}
                roomId={roomId}
                eventName={`${data.eventName}`}
              />
            )}
          </td>
        ))}
    </>
  );
};

export default Cells;
