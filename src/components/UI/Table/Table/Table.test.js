import React from 'react'
import Table from './Table'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<Table {...props} />)
    return component
}

describe('Render <Table/>', () => {
    describe('Render link New Movie if user is admin', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                onDelete: () => { },
                onSort: () => { },
                sortColumn: { 'a': 'b' },
                columns: ['a', 'b'],
                pageSize: 1,
                currentPage: 1,
                filtred: ['a', 'b'],
                user: { '_id': 1, 'name': 'a' },
                admin: true,
                onPageChange: () => { }
            }
            wrapper = setUp(props)
        })
        it('Render NewMovie', () => {
            const component = findByTestAtrr(wrapper, 'NewMovie')
            expect(component).toHaveLength(1);
        })
    })
    describe('NOT Render link New Movie if user is NOT admin', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                onDelete: () => { },
                onSort: () => { },
                sortColumn: { 'a': 'b' },
                columns: ['a', 'b'],
                pageSize: 1,
                currentPage: 1,
                filtred: ['a', 'b'],
                user: { '_id': 1, 'name': 'a' },
                //  admin: undefined,
                onPageChange: () => { }
            }
            wrapper = setUp(props)
        })
        it('No button', () => {
            const component = findByTestAtrr(wrapper, 'NewMovie')
            expect(component).toHaveLength(0);
        })
    })
    describe('Always', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                onDelete: () => { },
                onSort: () => { },
                sortColumn: { 'a': 'b' },
                columns: ['a', 'b'],
                pageSize: 1,
                currentPage: 1,
                filtred: ['a', 'b'],
                user: { '_id': 1, 'name': 'a' },
                admin: true,
                onPageChange: () => { }
            }
            wrapper = setUp(props)
        })
        it('Render Header3', () => {
            const component = findByTestAtrr(wrapper, 'Header3')
            expect(component).toHaveLength(1);
        })
    })

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                onDelete: () => { },
                onSort: () => { },
                sortColumn: { 'a': 'b' },
                columns: ['a', 'b'],
                pageSize: 1,
                currentPage: 1,
                filtred: ['a', 'b'],
                user: { '_id': 1, 'name': 'a' },
                admin: true,
                onPageChange: () => { }
            };
            const propsError = checkProps(Table, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });
})