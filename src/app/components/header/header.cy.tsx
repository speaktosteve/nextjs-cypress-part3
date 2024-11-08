import React from 'react'
import { Header } from './header'

describe('<Header />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Header />)
    })
    it('renders header', () => {
        cy.mount(<Header />)
        cy.get('h1').should('have.text', 'Site Header')
    })
})
