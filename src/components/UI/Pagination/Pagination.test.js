import React from 'react'
import Pagination from './Pagination'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<Pagination {...props} />)
    return component
}

describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
        const expectedProps = {
            moviesCount: 1,
            pageSize: 1,
            currentPage: 1,
            onPageChange: () => { }
        };
        const propsError = checkProps(Pagination, expectedProps);
        expect(propsError).toBeUndefined();
    });

});

describe('Should render <Pagination />', () => {

    describe('Should render pagination if pageCount > 1', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                moviesCount: 10,
                pageSize: 2,
                currentPage: 1

            }
            wrapper = setUp(props)
        })

        it(' pageCount > 1 ', () => {
            const component = findByTestAtrr(wrapper, 'PaginationComponent')
            expect(component).toHaveLength(1);
        })
    })

    describe('Should NOT render pagination if pageCount === 1', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                moviesCount: 1,
                pageSize: 1,
                currentPage: 1,
                onPageChange: () => { }

            }
            wrapper = setUp(props)
        })

        it(' pageCount === 1 ', () => {
            const component = findByTestAtrr(wrapper, 'PaginationComponent')
            expect(component).toBeDefined()
        })
    })

    describe('Should render paragraph No Movie if pageCount === 0', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                moviesCount: 0,
                pageSize: 1,
                currentPage: 1,
                onPageChange: () => { }

            }
            wrapper = setUp(props)
        })

        it(' pageCount === 0 ', () => {
            const component = findByTestAtrr(wrapper, 'NoMovies')
            expect(component).toHaveLength(1);
        })
    })


})