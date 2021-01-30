import React from 'react';
import InputWdropArea from '../Input/InputWdropArea';

const PictureGallery = ({ pictures, answers }) => {
  return (
    <div className='gallery-grid'>
      {answers.a1 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p1} alt='1' />
          <InputWdropArea answers={answers.a1} />
        </div>
      )}
      {answers.a2 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p2} alt='2' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a3 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p3} alt='3' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a4 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p4} alt='4' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a5 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p5} alt='5' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a6 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p6} alt='6' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a7 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p7} alt='7' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a8 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p8} alt='8' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a9 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p9} alt='9' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a10 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p10} alt='10' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a11 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p11} alt='11' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
      {answers.a12 && (
        <div className='gallery-grid-item'>
          <img src={pictures.p12} alt='12' />
          <InputWdropArea answers={answers.a2} />
        </div>
      )}
    </div>
  );
};

export default PictureGallery;
