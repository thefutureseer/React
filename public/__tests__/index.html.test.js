import fs from 'fs';
import path from 'path';

let html;

// Load the HTML file before all tests
beforeAll(() => {
  try {
    html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  } catch (error) {
    throw new Error('Failed to load index.html: ' + error.message);
  }
});

// Clean up after each test
afterEach(() => {
  document.documentElement.innerHTML = '';
});

test('index.html contains the root div', () => {
  document.documentElement.innerHTML = html;

  const rootDiv = document.querySelector('#root');
  expect(rootDiv).not.toBeNull();
});

test('index.html contains meta description', () => {
  document.documentElement.innerHTML = html;

  const metaDescription = document.querySelector('meta[name="description"]');
  expect(metaDescription).not.toBeNull();
  expect(metaDescription.getAttribute('content')).toMatch(/created using create-react-app/i);
});

test('index.html contains the title tag', () => {
  document.documentElement.innerHTML = html;

  const title = document.querySelector('title');
  expect(title).not.toBeNull();
  expect(title.textContent).toBe('React App'); 
});