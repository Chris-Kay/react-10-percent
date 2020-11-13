import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import PhotoSection from './photo-section';

test('renders all images passed to it', () => {
  const renderedApp = mount(<PhotoSection 
      images={[
          'images-one',
          'image-two',
          'image-three'
      ]}
  />);

  const images = renderedApp.find('.homepage-photos-image');
  expect(images.length).toBe(3);
});
