import React from 'react';
import InputWithDropArea from '../Input/InputWithDropArea';

const Cells = ({ cellData, socket, page, roomId, tableHead, tableOptions }) => {
  return (
    <>
      {cellData &&
        cellData.map((data, i) => (
          <td key={i} data-column={tableHead[i]}>
            {data.text || null}
            {data.ans && (
              <InputWithDropArea
                socket={socket}
                page={page}
                answers={data.ans}
                roomId={roomId}
                eventName={`${data.eventName}`}
                options={tableOptions}
              />
            )}
          </td>
        ))}
    </>
  );
};

export default Cells;
