import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import HistoryContainer from '../src/containers/HistoryContainer.tsx'
import HistoryBox from '../src/components/HistoryBox.tsx'

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('TimeButton domponents', () => {
  describe('LabeledText', () => {
    let wrapper;
    const props = {
      timeStamps: [],
      isToggle:(i)=> i,
      history: ["hello"],
      queries: ['Hello'],
    };

    beforeAll(() => {
      wrapper = shallow(<HistoryContainer {...props} />);
    });

    it('Renders a History child components', () => {
      expect(wrapper.find('#history-past-queries').at(0).children()).toHaveLength(props.queries.length);
    });
  });
});
  