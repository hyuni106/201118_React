import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/생각하러 가기🤔/i);
  expect(linkElement).toBeInTheDocument();
});
