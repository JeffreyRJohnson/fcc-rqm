import { shallow } from 'enzyme';
import * as React from 'react';
import App from '../App';


describe('<App />', () => {

  describe('Render as expected', () => {

    it('renders without crashing', () => {
      shallow(<App />);
    });

    it('renders welcome message', () => {
      const wrapper = shallow(<App />);
      const welcome = <h2>Welcome to React</h2>;
      expect(wrapper.contains(welcome)).toEqual(true);
    });

  });

  describe('Props and State testing', () => {

    it('state and props are empty', () => {
      const wrapper = shallow(<App />);
      const initState = { changeValues: {} };

      expect(wrapper.state()).toMatchObject(initState);
      expect(wrapper.state('changeValues')).toMatchObject({});

      expect(wrapper.props()).toMatchObject({});
      
    });

  });

});
