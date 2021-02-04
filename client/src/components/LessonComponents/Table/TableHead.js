import React from 'react';

const TableHead = ({ tableHead }) => {
  return (
    <>{tableHead && tableHead.map((data, i) => <th key={i}>{data}</th>)}</>
  );
};

export default TableHead;
