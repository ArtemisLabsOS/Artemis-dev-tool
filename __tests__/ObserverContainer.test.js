import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import ObserverContainer from '../src/containers/ObserverContainer';

configure({adapter: new Adapter() });


describe('Observer components', () => {
  describe('LabeledText',() => {
    let wrapper;
    const props = {
      timeStamps: [Function],
      historyBtn: [0],
      results: ['hello'],
      visualizerStatus: [true],
      isToggle:(i)=> i,
      history: ["hello"],
      queries: ['Hello'],
      schemaStatus:[true],
      url:['apollo'],
      cacheStatus:[true],
      getCache: (i)=> i,
    }


    beforeAll(() => {
      wrapper = shallow(<ObserverContainer{...props} />);
    });

    it('Renders an Observer child components', () => {
      expect(wrapper.find('#observerContainers').at(0).children()).toHaveLength(3);
    });
});
});