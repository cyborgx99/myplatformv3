import React from 'react';

const List = ({ listData, listHeading }) => {
  return (
    <>
      <h2> {listHeading} </h2>
      <ul>
        {listData.map((data, i) => (
          <li key={i}> {data.li} </li>
        ))}
      </ul>
    </>
  );
};

export default List;
