import React from 'react'
import MovieForm from './MovieForm'
import { shallow } from 'enzyme'
import { findByTestAtrr } from "../../../utiles/testFunctions"

const setUp = (props = {}) => {
    const component = shallow(<MovieForm {...props} />)
    return component
}

describe('Render <MovieForm/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            genreId: 'a',
            title: 'a',
            numberInStock: 1,
            dailyRentalRate: 1

        }
        wrapper = setUp(props)
    })

    it('Should render  form Movie', () => {
        const component = findByTestAtrr(wrapper, 'MovieFormComponent')
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
                name: 'title',
                title: 'Title',
                error: ''
            }
            wrapper = setUp(props)
        })

        it(' Title ', () => {
            const component = findByTestAtrr(wrapper, 'titleComponent')
            expect(component).toHaveLength(1);
        })

    })
    describe('Should render input', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'numberInStock',
                title: 'Number in Stock',
                error: ''
            }
            wrapper = setUp(props)
        })

        it(' Number in Stock ', () => {
            const component = findByTestAtrr(wrapper, 'numberInStockComponent')
            expect(component).toHaveLength(1);
        })

    })
    describe('Should render input', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'dailyRentalRate',
                title: 'Rate',
                error: ''
            }
            wrapper = setUp(props)
        })

        it('Rate', () => {
            const component = findByTestAtrr(wrapper, 'dailyRentalRateComponent')
            expect(component).toHaveLength(1);
        })

    })
    describe('Should render Select', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'genreId',
                title: 'Genre',
                error: ''
            }
            wrapper = setUp(props)
        })

        it(' Genre', () => {
            const component = findByTestAtrr(wrapper, 'genreIdComponent')
            expect(component).toHaveLength(1);
        })

    })
})