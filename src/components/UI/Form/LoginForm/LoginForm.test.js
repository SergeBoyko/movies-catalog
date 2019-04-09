import React from 'react'
import LoginForm from './LoginForm'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<LoginForm {...props} />)
    return component
}

describe('Render <LoginForm/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            name: 'a',
            title: 'a',
            error: ''
        }
        wrapper = setUp(props)
    })

    it('Should render  form Login', () => {
        const component = findByTestAtrr(wrapper, 'LoginFormComponent')
        expect(component).toHaveLength(1);
    })
    it('Should render  Header', () => {
        const component = findByTestAtrr(wrapper, 'Header')
        expect(component).toHaveLength(1);
    })

    describe('Should render input', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'username',
                title: 'Username',
                error: ''
            }
            wrapper = setUp(props)
        })

        it(' Username ', () => {
            const component = findByTestAtrr(wrapper, 'usernameComponent')
            expect(component).toHaveLength(1);
        })

    })

    describe('Should render input', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'password',
                title: 'Password',
                error: ''
            }
            wrapper = setUp(props)
        })

        it(' Password ', () => {
            const component = findByTestAtrr(wrapper, 'passwordComponent')
            expect(component).toHaveLength(1);
        })
    })
    describe('Should render Button', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Title'
            }
            wrapper = setUp(props)
        })

        it(' Password ', () => {
            const component = findByTestAtrr(wrapper, 'Button')
            expect(component).toHaveLength(1);
        })
    })
})
