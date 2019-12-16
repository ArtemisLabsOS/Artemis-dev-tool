import React from 'react';
import ReactDOM from "react-dom";
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });
import { shallow, mount, render} from 'enzyme';
import Home from "../Home";
import { Item } from 'semantic-ui-react';
import renderer from 'react-test-renderer';

// import { render, fireEvent, getByTestId} from "react-testing-library";

// mounting --> Full DOM rendering including child components

// shallow --> renders only the single component --> not including children 
// - useful for pure unit testing

// render --> renders to static HTML, including children

// testing to see if sample test is working ...

it('should render correctly with no props', () => {
  const homeComponent = renderer.create(<Home/>).toJSON();
  expect(homeComponent).toMatchSnapshot();
})

