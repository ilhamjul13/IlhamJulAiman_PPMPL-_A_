import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test('resets the count when reset button is clicked', () => {
  render(<Counter />);
  
  fireEvent.click(screen.getByText(/Increment/i));
  
  expect(screen.getByText(/Count:/i)).toHaveTextContent('Count: 1');
  
  fireEvent.click(screen.getByText(/Reset/i));
  
  expect(screen.getByText(/Count:/i)).toHaveTextContent('Count: 0');
});
