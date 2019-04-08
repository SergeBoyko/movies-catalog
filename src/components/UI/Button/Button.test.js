import React from 'react';
import { shallow } from 'enzyme'
import Button from './Button'
import { findByTestAtrr, checkProps } from "../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<Button {...props} />)
    return component
}

describe('Render <Button/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            title: 'a',
            actionclass: 'a',
            clicked: () => { }
        }
        wrapper = setUp(props)
    })
    it('with props', () => {
        const component = findByTestAtrr(wrapper, 'ButtonComponent')
        expect(wrapper).toHaveLength(1);
    })
})

describe('Checking PropTypes <Button/>', () => {
    it('Should NOT throw a warning', () => {
        const expectedProps = {
            title: 'a',
            actionclass: 'a',
            clicked: () => { }
        };
        const propsError = checkProps(Button, expectedProps);
        expect(propsError).toBeUndefined();
    });
})
