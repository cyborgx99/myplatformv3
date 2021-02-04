import React from 'react';
import InputWithDropArea from '../Input/InputWithDropArea';

const Cells = ({ cellData, cellInput, socket, page, roomId }) => {
  console.log(cellData);
  return (
    <>
      {cellData &&
        cellData.map((data, i) => {
          if (data.text) {
            return <td key={i}> {data.text} </td>;
          } else if (data.answer) {
            return (
              <td key={i}>
                <InputWithDropArea
                  socket={socket}
                  page={page}
                  answers={data.answer}
                  roomId={roomId}
                  eventName={`${i}`}
                />
              </td>
            );
          }
        })}
    </>
  );
};

export default Cells;
