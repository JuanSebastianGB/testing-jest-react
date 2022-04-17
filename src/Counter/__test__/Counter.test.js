import React from 'react';
import { Counter } from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const renderedComponent = render(<Counter initialNumber={0} />);
  getByTestId = renderedComponent.getByTestId;
});

test('Header is rendering correctly with the expected text', () => {
  const headerElement = getByTestId('header');
  expect(headerElement.textContent).toBe('Amazing Counter');
});

test('Counter starts with a 0', () => {
  const counterElement = getByTestId('counter');
  expect(counterElement.textContent).toBe('0');
});

test('Initial value in input expected to be 1', () => {
  const inputvalueElement = getByTestId('input');
  expect(inputvalueElement.value).toBe('1');
});
test('Add Button render with +', () => {
  const plusElement = getByTestId('plus');
  expect(plusElement.textContent).toBe('+');
});
test('Minus Button render with -', () => {
  const minusElement = getByTestId('minus');
  expect(minusElement.textContent).toBe('-');
});
test('Changing value of input works correctly', () => {
  const inputValueElement = getByTestId('input');

  expect(inputValueElement.value).toBe('1');

  fireEvent.change(inputValueElement, {
    target: {
      value: '5'
    }
  });
  expect(inputValueElement.value).toBe('5');
});
test('Expected to increment by 1 the counter value when + is clicked', () => {
  const plusElement = getByTestId('plus');
  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');
  fireEvent.click(plusElement);
  expect(counterElement.textContent).toBe('1');
});
test('Expected to decrement by 1 the counter value when - is clicked', () => {
  const minusElement = getByTestId('minus');
  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');
  fireEvent.click(minusElement);
  expect(counterElement.textContent).toBe('-1');
});
test('Changing input value the clicking on add btn works correctly', () => {
  const plusElement = getByTestId('plus');
  const counterElement = getByTestId('counter');
  const inputValueElement = getByTestId('input');

  expect(counterElement.textContent).toBe('0');
  fireEvent.change(inputValueElement, {
    target: {
      value: '5'
    }
  });
  expect(inputValueElement.value).toBe('5');
  fireEvent.click(plusElement);
  expect(counterElement.textContent).toBe('5');
});

test('Changing input value the clicking on subtract btn works correctly', () => {
  const minusElement = getByTestId('minus');
  const counterElement = getByTestId('counter');
  const inputValueElement = getByTestId('input');

  expect(counterElement.textContent).toBe('0');
  fireEvent.change(inputValueElement, {
    target: {
      value: '5'
    }
  });
  expect(inputValueElement.value).toBe('5');
  fireEvent.click(minusElement);
  expect(counterElement.textContent).toBe('-5');
});

test('Adding and then subtracting leads to the right output', () => {
  const minusElement = getByTestId('minus');
  const plusElement = getByTestId('plus');
  const counterElement = getByTestId('counter');
  const inputValueElement = getByTestId('input');

  expect(counterElement.textContent).toBe('0');
  expect(inputValueElement.value).toBe('1');

  fireEvent.change(inputValueElement, {
    target: {
      value: 10
    }
  });
  fireEvent.click(plusElement);
  expect(counterElement.textContent).toBe('10');
  fireEvent.change(inputValueElement, {
    target: {
      value: 8
    }
  });
  fireEvent.click(minusElement);
  expect(counterElement.textContent).toBe('2');
});

test('Counter contains correct class name', () => {
  const counterElement = getByTestId('counter');
  const inputValueElement = getByTestId('input');
  const plusElement = getByTestId('plus');
  const minusElement = getByTestId('minus');

  expect(counterElement.className).toBe('');
  fireEvent.change(inputValueElement, {
    target: {
      value: 50
    }
  });
  fireEvent.click(plusElement);
  fireEvent.click(plusElement);
  fireEvent.click(plusElement);
  expect(counterElement.className).toBe('green');

  fireEvent.change(inputValueElement, {
    target: {
      value: 300
    }
  });
  fireEvent.click(minusElement);
  expect(counterElement.className).toBe('red');
});
