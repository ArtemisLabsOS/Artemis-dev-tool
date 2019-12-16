import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'





configure({ adapter: new Adapter() });

describe('React unit tests', () => {
    describe('LabeledText', () => {
        let wrapper;
        const props = {
            label: '',
            text: '.'
        };

        beforeAll(() => {
            wrapper = shallow(<LabeledText {...props} />);
        })

        it('Snapshot testing labeled test', () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        })

        if('Renders a <p> tagwith the label in bold', () => {
            expect(wrapper.type()).toEqual('p');
            expect(wrapper.text()).toEqual('Artemis: Labs');
        })
    })
})