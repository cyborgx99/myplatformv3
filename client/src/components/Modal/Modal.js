import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../actions/modal';

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const closeModal = (e) => {
    dispatch(toggleModal('closed', ''));
  };

  let modalInlineStyle;
  if (modal.toggle === 'open') {
    modalInlineStyle = { display: 'block' };
  } else {
    modalInlineStyle = { display: 'none' };
  }

  return (
    <div
      onClick={(e) => closeModal(e)}
      className='site-modal'
      style={modalInlineStyle}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modal-content'
      >
        <div className='col right'>
          <span onClick={(e) => closeModal(e)} className='close'>
            &times;
          </span>
        </div>
        <div>{modal.content}</div>
      </div>
    </div>
  );
};

export default Modal;
