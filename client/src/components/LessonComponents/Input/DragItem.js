import React from 'react';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

const DragItem = ({ text }) => {
  const lesson = useSelector((state) => state.lesson);

  const setCanDragAndOpacity = () => {
    return lesson.pages.filter((page) => page.pageQuestionData === text)[0]
      ? true
      : false;
  };

  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'text', text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    canDrag: !setCanDragAndOpacity(),
  });

  return (
    <span
      className={`drag-item ${setCanDragAndOpacity() && ' opacity '}`}
      ref={dragRef}
      style={{ opacity }}
    >
      {text}
    </span>
  );
};

export default DragItem;
