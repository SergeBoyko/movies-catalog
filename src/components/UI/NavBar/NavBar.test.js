import React from 'react'
import NavBar from './NavBar'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<NavBar {...props} />)
    return component
}

describe('Render component  <NavBar/> without errors', () => {
    describe('with props: user and admin', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                user: {
                    _id: 1,
                    name: 'a',
                    email: 'a'
                },
                admin: true
            }
            wrapper = setUp(props)
        })

        it('Should render link Customers ', () => {
            const component = findByTestAtrr(wrapper, 'CustomersComponent')
            expect(wrapper).toHaveLength(1);
        })

    })
    describe('with only props: user', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                user: {
                    _id: 2,
                    name: 'a',
                    email: 'a'
                },
                admin: undefined
            }
            wrapper = setUp(props)
        })

        it('Should render link Rentals ', () => {
            const component = findByTestAtrr(wrapper, 'RentalsComponent')
            expect(wrapper).toHaveLength(1);
        })
        it('Should render link Profile ("User Name") ', () => {
            const component = findByTestAtrr(wrapper, 'RentalsComponent')
            expect(wrapper).toHaveLength(1);
        })
        it('Should render link Logout ', () => {
            const component = findByTestAtrr(wrapper, 'LogoutComponent')
            expect(wrapper).toHaveLength(1);
        })

    })
    describe('without props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should render link Login ', () => {
            const component = findByTestAtrr(wrapper, 'LoginComponent')
            expect(wrapper).toHaveLength(1);
        })

        it('Should render link Register ', () => {
            const component = findByTestAtrr(wrapper, 'RegisterComponent')
            expect(wrapper).toHaveLength(1);
        })
    })
    describe('Always', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should render link Home', () => {
            const component = findByTestAtrr(wrapper, 'HomeComponent')
            expect(wrapper).toHaveLength(1);
        })
        it('Should render Search Box Component', () => {
            const component = findByTestAtrr(wrapper, 'SearchBoxComponent')
            expect(wrapper).toHaveLength(1);
        })


    })

})
describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
        const expectedProps = {
            user: {
                _id: 3,
                name: 'a',
                email: 'a'
            },
            admin: true
        };
        const propsError = checkProps(NavBar, expectedProps);
        expect(propsError).toBeUndefined();
    });

});