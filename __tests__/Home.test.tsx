import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/components/Home';

describe('<Home />', () => {
    let wrapper: any;
    it('Should render <Home />', () => {
        wrapper = shallow(<Home />)
        expect(wrapper).toBeDefined();
    })
})