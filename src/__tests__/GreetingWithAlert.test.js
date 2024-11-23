import { render, screen, fireEvent } from '@testing-library/react';
import GreetingWithAlert from '../GreetingWithAlert';

global.alert = jest.fn();

test('handles button click and displays alert and message', () => {
  render(<GreetingWithAlert name="Ilham" />);
  
  fireEvent.click(screen.getByText('Say Hello'));
  
  expect(global.alert).toHaveBeenCalledWith('Hello, Ilham!');
  
  expect(screen.getByText('You clicked the button!')).toBeInTheDocument();
});
