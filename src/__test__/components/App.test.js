import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import App from '../../App';

describe('<App />', () => {
  test('renders new book modal', () => {
    render(<App />);
    const modal = screen.getByText(/New Book/i);
    expect(modal).toBeInTheDocument();
  })

  test('calls local storage', () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    render(<App />);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});