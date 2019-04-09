import React from 'react';
import { shallow } from 'enzyme'
import Input from './Input'
import { findByTestAtrr, checkProps } from "../../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<Input {...props} />)
    return component
}

describe('Render <Input/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            name: 'a',
            label: 'a',
            error: ''

        }
        wrapper = setUp(props)
    })
    it('with props', () => {
        const component = findByTestAtrr(wrapper, 'InputComponent')
        expect(component).toHaveLength(1);
    })

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                name: 'a',
                label: 'a',
                error: 'a'
            };
            const propsError = checkProps(Input, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
})