import React from 'react';
import Cells from './Cells';
import TableHead from './TableHead';

const Table = ({ tableHead, tableRowData, socket, page, roomId }) => {
  return (
    <>
      <table className='lesson-table'>
        <thead>
          <tr>
            <TableHead tableHead={tableHead} />
          </tr>
        </thead>
        <tbody>
          {tableRowData &&
            tableRowData.map((rowData, i) => (
              <tr key={i}>
                <Cells
                  socket={socket}
                  page={page}
                  roomId={roomId}
                  cellData={rowData}
                />
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
