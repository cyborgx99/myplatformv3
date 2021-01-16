import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';

const SpinningModal = () => {
  const spinner = useSelector((state) => state.spinner);

  let modalInlineStyle;
  if (spinner.spinning === 'on') {
    modalInlineStyle = { display: 'block' };
  } else {
    modalInlineStyle = { display: 'none' };
  }

  return (
    <div className='spinner-modal' style={modalInlineStyle}>
      <Spinner />
    </div>
  );
};

export default SpinningModal;
