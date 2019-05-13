import React from 'react';
import { shallow } from 'enzyme'
import Select from './Select'
import { findByTestAtrr, checkProps } from "../../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<Select {...props} />)
    return component
}

describe('Render <Select/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            name: 'a',
            label: 'a',
            onChange: () => { },
            options: [{ '_id': 1, 'name': 'a' }, { '_id': 2, 'name': 'b' }],
            value: 'a',
            error: ''

        }
        wrapper = setUp(props)
    })
    it('with props', () => {
        const component = findByTestAtrr(wrapper, 'SelectComponent')
        expect(component).toHaveLength(1);
    })

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                name: 'a',
                label: 'a',
                onChange: () => { },
                options: [{ '_id': 1, 'name': 'a' }, { '_id': 2, 'name': 'b' }],
                value: 'a',
                error: 'a'
            };
            const propsError = checkProps(Select, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
})