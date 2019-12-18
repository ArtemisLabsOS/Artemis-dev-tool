import React from 'react';
import ReactDOM from "react-dom";
import { shallow, mount, render} from 'enzyme';
import GraphQLVisualizer from '../src/components/GraphQLVisualizer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe ('<GraphQLVisualizer/>', () => {
  const props = {
    results: ["test-data1", "test-data2"],
  }
  it('renders the GraphQLVisualizer Component without crashing', () => {
    const visualizer = shallow(<GraphQLVisualizer {...props}/>);
    expect(visualizer.find('div').length).toEqual(3);
  });

  // it('renders the response h3 tag', () => {
  //   const cache = shallow(<GraphQLResponse />);
  //   expect(cache.find('graphql-heading')).toEqual('div');
  // })
});
