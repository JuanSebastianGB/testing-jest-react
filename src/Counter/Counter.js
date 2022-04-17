import React, { useState } from 'react';
import './Counter.css';

/**
 * Counter component
 * @param {object} props - Porperties
 * @param {number} props.initialNumber -Initial Value State
 *
 * */
export const Counter = ({ initialNumber }) => {
  const [counterValue, setCounterValue] = useState(initialNumber);
  const [inputValue, setInputValue] = useState(1);
  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };
  const subtractToCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <>
      <h3 data-testid='header'>Amazing Counter</h3>
      <h2
        data-testid='counter'
        className={`${counterValue >= 100 ? 'green' : ''}${counterValue <= -100 ? 'red' : ''}`}
      >
        {counterValue}
      </h2>
      <button
        data-testid='minus'
        onClick={subtractToCounter}
      >-
      </button>
      <input
        className='text-center'
        data-testid='input'
        type='text'
        value={inputValue}
        onChange={e => setInputValue(parseInt(e.target.value))}
      />
      <button
        data-testid='plus'
        onClick={addToCounter}
      >+
      </button>
    </>

  );
};
