import React from 'react'
import ListGroup from './ListGroup'
import { shallow } from 'enzyme'
import { findByTestAtrr } from "../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<ListGroup {...props} />)
    return component
}

describe('Render <ListGroup/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            textProperty: "name",
            valueProperty: "_id",
            genres: ['a', 'b'],
            selectGenre: () => { },
            selectedGenre: 'a'

        }
        wrapper = setUp(props)
    })
    it('div ListGroupComponent', () => {
        const component = findByTestAtrr(wrapper, 'ListGroupComponent')
        expect(component).toHaveLength(1);
    })
})