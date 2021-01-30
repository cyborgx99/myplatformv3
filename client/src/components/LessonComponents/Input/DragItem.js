import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ text, page, question }) => {
  const savedOpacity = () => {
    if (
      currentCompleted &&
      currentCompleted[page] &&
      currentCompleted[page][question]
    ) {
      return ' drag-opacity ';
    }
  };

  const cannotDrag = () => {
    if (
      currentCompleted &&
      currentCompleted[page] &&
      currentCompleted[page][question]
    ) {
      return false;
    }
  };

  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'text', text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    canDrag: cannotDrag(),
  });

  return (
    <span
      className={`drag-item ${savedOpacity()}`}
      ref={dragRef}
      style={{ opacity }}
    >
      {text}
    </span>
  );
};

export default DragItem;
