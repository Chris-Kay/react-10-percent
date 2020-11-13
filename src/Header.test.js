import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { mount } from 'enzyme';
import Header from './Header';

test('add nav items from config', () => {
    const renderedApp = mount(<Header />);
    const logo = renderedApp.find('.menu-items');
    expect(logo.find('a').at(0).text()).toBe('Link One');
    expect(logo.find('a').at(1).text()).toBe('Link Two');
    expect(logo.find('a').at(2).text()).toBe('Link Three');
    expect(logo.find('a').at(3).text()).toBe('Link Four');
})
