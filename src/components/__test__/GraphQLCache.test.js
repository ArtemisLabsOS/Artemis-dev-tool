import React from 'react';
import ReactDOM from "react-dom";
import { shallow, mount, render} from 'enzyme';
import GraphQLCache from '../ApolloGraphQLCache';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test --> name --> expect something to be something.
// assertion.

// since we are running JEST --> we don't need to import test and what not
// runs the test for us --> assertion libary --> mocking and faking functions
// assert 

// mock --> fake data / fake function that you might not have access to --> faster test / smaller chunks of test

// assertion --> you are asserting a certain thing is a certain way
// test('<ApolloGraphQLCache/>', () => {
//   expect(true).toBeTruthy();
// })
describe('<GraphQLCache />', () => {
  it('renders the GraphQLCache Component without crashing', () => {
    const cache = shallow(<GraphQLCache />);
    expect(cache.find('div').length).toEqual(3);
  });

  it('renders the cache h3 tag', () => {
    const cache = shallow(<GraphQLCache />);
    expect(cache.contains(<h3>CACHE</h3>)).toEqual(true);
  })

  it('renders the proper cache data', () => {
    const cache = shallow(<GraphQLCache />);
    expect(cache.find('cache-data')).toEqual({});
  })
})

