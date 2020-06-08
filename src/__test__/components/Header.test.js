import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import Header from '../../Navigation/Header';

describe('<Header />', () => {


  test('renders new button', () => {
    render(<Header/>);

    const newButton = screen.getByText(/New/i);
    expect(newButton).toBeInTheDocument();
  })

  test('renders book count', () => {

    render(<Header count={10} filter={''} setfilter={()=>{}} />);

    const bookCounter = screen.getByText(/10/i);
    expect(bookCounter).toBeInTheDocument();
  })

});
