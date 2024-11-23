import { render, screen } from '@testing-library/react';
import Greeting from '../Greeting';

test('displays the correct greeting message with name prop', () => {
  render(<Greeting name="Ilham" />);
  
  // Memastikan teks yang ditampilkan benar
  expect(screen.getByText('Hello, Ilham')).toBeInTheDocument();
});
