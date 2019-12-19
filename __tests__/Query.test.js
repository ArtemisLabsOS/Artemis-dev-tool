import * as React from 'react';
import ReactJson from 'react-json-view';
import { shallow } from 'enzyme';
import Query from '../src/components/Query'

const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });

describe('<Query />', () => {
  let props;
  beforeAll(() => {
    props = {
      queries: [{}],
      historyBtn: 0,
    };
  });
  let reactJsonProp;
  beforeAll(() => {
    reactJsonProp = {
      src: {},
      name: null,
      iconStyle: '',
      indentWidth: 1,
      collapsed: 3,
      enableClipboard: false,
      displayDataTypes: false,
      displayObjectSize: false,
    };
  });
  it('Should have two div tags', () => {
    const wrapper = shallow(<Query {...props} />);
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('Should have one h3 tags', () => {
    const wrapper = shallow(<Query {...props} />);
    expect(wrapper.find('h3').length).toEqual(1);
  });
  it('Should have <ReactJson />', () => {
    const wrapper = shallow(<Query {...props} />);
    expect(wrapper.contains(<ReactJson {...reactJsonProp} />));
  });
});