import React from 'react';
import InputWithDropArea from '../Input/InputWithDropArea';
import ListOfWordsHeader from './ListOfWordsHeader';

const PictureGallery = ({ galleryData, socket, page, roomId }) => {
  return (
    <>
      <ListOfWordsHeader
        answers={galleryData && galleryData.map((a) => a.ans)}
      />
      <div className='gallery-grid'>
        {galleryData &&
          galleryData.map((gallery, i) => (
            <div key={gallery.pic} className='gallery-grid-item'>
              <img src={gallery.pic} alt='1' />
              <InputWithDropArea
                eventName={`gallery${i + 1}`}
                page={page}
                roomId={roomId}
                socket={socket}
                dnd='dnd'
                answers={gallery.ans}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default PictureGallery;
