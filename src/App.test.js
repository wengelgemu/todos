import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders the page heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Things to do/i);
  expect(linkElement).toBeInTheDocument();
});
