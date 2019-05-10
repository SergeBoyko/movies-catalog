import React from 'react'
import RegisterForm from './RegisterForm'
import { shallow } from 'enzyme'
import { findByTestAtrr } from "../../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<RegisterForm {...props} />)
    return component
}

describe('Render <RegisterForm/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            name: 'a',
            title: 'a',
            error: ''
        }
        wrapper = setUp(props)
    })

    it('Should render  form Register', () => {
        const component = findByTestAtrr(wrapper, 'RegisterFormComponent')
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
    describe('Should render input', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'name',
                title: 'Name',
                error: ''
            }
            wrapper = setUp(props)
        })

        it('Name', () => {
            const component = findByTestAtrr(wrapper, 'nameComponent')
            expect(component).toHaveLength(1);
        })
    })
    describe('Should render Button', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Register'
            }
            wrapper = setUp(props)
        })

        it(' Button ', () => {
            const component = findByTestAtrr(wrapper, 'Button')
            expect(component).toHaveLength(1);
        })
    })
})
