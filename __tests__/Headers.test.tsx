import React from 'react';
import { shallow } from "enzyme";
import Headers, { IHeaders } from '../src/containers/Headers';
import Dropdown from '../src/components/DropdownMenu';

const func = jest.fn();

describe('<Headers />', () => {
    let props: IHeaders;
    beforeAll(() => {
        props = {
            visualizerToggle: func,
            schemaToggle: func,
            cacheToggle: func
        }
    })
    it("Should make a snapshot", () => {
        const wrapper = shallow(<Headers {...props} />)
        expect(wrapper).toMatchSnapshot();
    })
    it("Should have <h1>ARTEMIS</h1>", () => {
        const wrapper = shallow(<Headers {...props} />)
        expect(wrapper.contains(<h1>ARTEMIS</h1>)).toEqual(true)
    })
    it("Should have two div tag", () => {
        const wrapper = shallow(<Headers {...props} />)
        expect(wrapper.find('div').length).toEqual(2)

    })
    it("Should render <Dropdown />", () => {
        const wrapper = shallow(<Headers {...props} />)
        expect(wrapper.find(<Dropdown />)).toBeDefined()
    })
    it("Should render three button tag", () => {
        const wrapper = shallow(<Headers {...props} />)
        expect(wrapper.find('button').length).toEqual(3)
    })
})