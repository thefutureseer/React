import fs from 'fs';
import path from 'path';

test('index.html contains the root div', () => {
  // Load the HTML file
  const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
  
  // Set the HTML in jsdom
  document.documentElement.innerHTML = html;

  // Check for the root div
  const rootDiv = document.querySelector('#root');
  expect(rootDiv).not.toBeNull();
});

test('index.html contains meta description', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
  document.documentElement.innerHTML = html;

  const metaDescription = document.querySelector('meta[name="description"]');
  expect(metaDescription).not.toBeNull();
  expect(metaDescription.getAttribute('content')).toBe('Web site created using create-react-app');
});