import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const renderedApp = mount(<App />);
  const app = renderedApp.find('.App');
  expect(app.length).toBe(1);
});

test('renders the header', () => {
  const renderedApp = mount(<App />);
  const header = renderedApp.find('.topnav');
  expect(header.length).toBe(1);
});

test('renders the body', () => {
  const renderedApp = mount(<App />);
  const body = renderedApp.find('.main');
  expect(body.length).toBe(1);
});


test('renders the footer', () => {
  const renderedApp = mount(<App />);
  const footer = renderedApp.find('.footer');
  expect(footer.length).toBe(1);
});
