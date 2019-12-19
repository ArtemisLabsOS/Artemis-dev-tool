import React from 'react';
import ReactDOM from "react-dom";
import { shallow, mount, render} from 'enzyme';
import GraphQLResponse from '../src/components/GraphQLResponse';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe ('<GraphQLResponse />', () => {
  const props = {
    results : ['mock-data1'],
    historyBtn: 1,
  }
  it('renders the GraphQLResponse Component without crashing', () => {
    const response = shallow(<GraphQLResponse {...props}/>);
    expect(response.contains(<h3 className="graphql-heading">RESPONSE</h3>)).toEqual(true);
  });

  it('renders the GraphQLCache Component without crashing', () => {
    const response = shallow(<GraphQLResponse {...props}/>);
    expect(response.find('div').length).toEqual(2);
  });

  it('renders the proper cache data', () => {
    const response = shallow(<GraphQLResponse {...props}/>);
    expect(response.find(".graphql-response")).toEqual({});
  })

  it('renders the response h3 tag', () => {
    const response = shallow(<GraphQLResponse {...props}/>);
    expect(response.find('.graphql-heading')).toEqual({});
  })
});