import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const liElement = getByText(/linkedin/i);
  const ghElement = getByText(/github/i);
  expect(ghElement).toBeInTheDocument();
  expect(liElement).toBeInTheDocument();
});
