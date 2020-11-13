import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { mount } from 'enzyme';
import Header from './Header';


test('renders the header', () => {
  const renderedApp = mount(<Header />);
  const logo = renderedApp.find('.logo');
  expect(logo.props().src).toBe('generic-logo.jpg');
});

test('add nav items from config', () => {
    const renderedApp = mount(<Header />);
    const logo = renderedApp.find('.menu-links');
    expect(logo.find('li').at(0).text()).toBe('Link One');
    expect(logo.find('li').at(1).text()).toBe('Link Two');
    expect(logo.find('li').at(2).text()).toBe('Link Three');
    expect(logo.find('li').at(3).text()).toBe('Link Four');
})
