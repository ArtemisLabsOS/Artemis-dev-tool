import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/components/Home';

const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
    let wrapper;
    it('Should render <Home />', () => {
        wrapper = shallow(<Home />)
        expect(wrapper).toBeDefined();
    })

    it('should render correctly with no props', () => {
        const homeComponent = renderer.create(<Home/>).toJSON();
        expect(homeComponent).toMatchSnapshot();
      })
})