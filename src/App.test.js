import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers like toBeInTheDocument
import App from './App';

describe('App Component', () => {
  
  test('renders initial magic counter and static text', () => {
    render(<App />);
    
    // Check for main title
    const titleElement = screen.getByText(/React \+ Azure Magic/i);
    expect(titleElement).toBeInTheDocument();

    // Check for initial counter value
    const counterElement = screen.getByText(/Magic Counter: 0/i);
    expect(counterElement).toBeInTheDocument();

    // Check for button presence
    const buttonElement = screen.getByRole('button', { name: /Cast Spell/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('increments magic counter when button is clicked', () => {
    render(<App />);
    
    const buttonElement = screen.getByRole('button', { name: /Cast Spell/i });
    
    // Simulate user clicking the button
    fireEvent.click(buttonElement);
    
    // Verify state change reflected in the DOM
    const updatedCounter = screen.getByText(/Magic Counter: 1/i);
    expect(updatedCounter).toBeInTheDocument();

    // Click again to ensure it continues to increment
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Magic Counter: 2/i)).toBeInTheDocument();
  });

  test('displays correct live status message', () => {
    render(<App />);
    const statusMessage = screen.getByText(/Live on Azure Static Web Apps/i);
    expect(statusMessage).toBeInTheDocument();
  });
});
