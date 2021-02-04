import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

const InputWithDropArea = ({
  socket,
  eventName,
  options,
  answers,
  page,
  roomId,
  dnd,
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    socket.on(eventName, (msg) => {
      setInputValue(msg);
    });
    // eslint-disable-next-line
  }, []);

  const [{ canDrop }, dropRef] = useDrop({
    accept: 'text',
    drop: (item) => {
      // do update

      setInputValue(item.text);
      if (socket) {
        const data = {
          eventName: eventName,
          value: item.text,
        };
        socket.emit('inputs', data);
      }

      //   handleDrop(spot, item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const canDropClassName = () => {
    if (canDrop) return 'can-drop-color';
  };

  const inputChange = (e) => {
    setInputValue(e.target.value);
    if (socket) {
      const data = {
        eventName: eventName,
        value: e.target.value,
      };
      socket.emit('inputs', data);
    }
  };

  const correctAnswer = () => {
    if (
      answers
        .map((v) => v.toLowerCase())
        .includes(inputValue.toLocaleLowerCase())
    ) {
      return true;
    }
  };

  return (
    <div data-title={answers}>
      {options ? (
        <select
          disabled={correctAnswer()}
          value={inputValue}
          onChange={(e) => inputChange(e)}
          className={correctAnswer() && 'correct-answer'}
        >
          <option disabled></option>
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      ) : dnd === 'dnd' ? (
        // if we pass the dnd prop we have a drop area othewise just an input
        <div className='drop-area' ref={dropRef}>
          <input
            disabled={correctAnswer()}
            className={`${canDropClassName()} ${
              correctAnswer() && 'correct-answer'
            }`}
            type='text'
            value={inputValue}
            onChange={(e) => inputChange(e)}
          />
        </div>
      ) : (
        answers && (
          <input
            disabled={correctAnswer()}
            className={`${canDropClassName()} ${
              correctAnswer() && 'correct-answer'
            }`}
            type='text'
            value={inputValue}
            onChange={(e) => inputChange(e)}
          />
        )
      )}
    </div>
  );
};

InputWithDropArea.propTypes = {
  socket: PropTypes.object.isRequired,
  eventName: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
};

export default InputWithDropArea;
