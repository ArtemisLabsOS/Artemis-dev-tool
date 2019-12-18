import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../setupTests';
import  App  from '../containers/App'
import ObserverContainer from "../containers/ObserverContainer";
import Headers from '../containers/Headers';
import Home from '../components/Home';
import msgToBackground from '../Utility/msgToBackground'
import '../setupTests';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe('App', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });
    it('Should match snapshot, render Header, Body, and Footer', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.exists(ObserverContainer)).toBe(true);
      expect(wrapper.exists(Headers)).toBe(true);
      expect(wrapper.exists(Home)).toBe(true);
      expect(wrapper.exists(msgToBackground)).toBe(false);
    });
  });