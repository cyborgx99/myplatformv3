import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { savePageData } from '../../../actions/lesson';
import { useDispatch, useSelector } from 'react-redux';

const InputWithDropArea = React.memo(
  ({ socket, eventName, options, answers, page, roomId, dnd }) => {
    const dispatch = useDispatch();
    const lesson = useSelector((state) => state.lesson);
    const pageQuestion = `${page}${eventName}`;

    const getInitValue = () => {
      // if we have data filter it to match current page and question and setInputValue to it or ''
      return lesson.pages.filter(
        (page) => page.pageQuestion === pageQuestion
      )[0]
        ? lesson.pages.filter((page) => page.pageQuestion === pageQuestion)[0]
            .pageQuestionData
        : '';
    };

    const [inputValue, setInputValue] = useState(getInitValue());

    const correctAnswer = () => {
      if (
        answers
          .map((v) => v.toLowerCase())
          .includes(inputValue.toLocaleLowerCase())
      ) {
        return true;
      }
    };

    useEffect(() => {
      socket.on(eventName, (msg) => {
        setInputValue(msg);
      });
      // eslint-disable-next-line
    }, []);

    useEffect(() => {
      if (correctAnswer() === true) {
        const pages = {
          pageQuestion,
          pageQuestionData: inputValue,
        };

        const pagesObject = {
          lessonName: roomId,
          pages,
        };

        if (!getInitValue()) {
          dispatch(savePageData(pagesObject));
        }
      }
      // eslint-disable-next-line
    }, [inputValue]);

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
  }
);

InputWithDropArea.propTypes = {
  socket: PropTypes.object.isRequired,
  eventName: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
};

export default InputWithDropArea;
