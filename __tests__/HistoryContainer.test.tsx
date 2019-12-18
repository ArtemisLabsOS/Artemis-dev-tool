import * as React from 'react';
import { shallow } from 'enzyme';
import HistoryContainer, { IHistoryOfPastQueries } from '../src/containers/HistoryContainer'

const func = jest.fn()

describe('<HistoryContainer />', () => {
    let props: IHistoryOfPastQueries;
    beforeAll(() => {
        props = {
            timeStamps: [{}],
            isToggle: func,
            history: [''],
            queries: [{}]
        }
    })
    it('Should render <HistoryBox />', () => {
        const result = shallow(<HistoryContainer {...props} />)
        expect(result.contains(<div id="history-past-queries"></div>)).toEqual(false)
    })

    xit('Should render if <HistoryBox /> is pushed onto results array', () => {

    })
})