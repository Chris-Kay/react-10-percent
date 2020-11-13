import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { mount } from 'enzyme';
import Header from './Header';


test('renders the footer', () => {
  const renderedApp = mount(<Header />);
  const logo = renderedApp.find('.logo');
  expect(logo.props().src).toBe('generic-logo.jpg');
});
