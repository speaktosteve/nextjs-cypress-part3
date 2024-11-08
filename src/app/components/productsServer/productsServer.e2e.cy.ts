const apiURL = 'https://fakestoreapi.com/products'

describe('Tests for the <ProductsServer /> component', () => {
    beforeEach(() => {
        cy.log('Adding interceptor to return stubbed data')
        cy.intercept('GET', apiURL, { fixture: 'fakeProducts.json' })
    })
    it('is available', () => {
        cy.visit(
            'http://localhost:6006/iframe.html?globals=&args=&id=products-server-rendered--default&viewMode=story'
        )
    })
    // test that the component shows the correct header
    it('renders header', () => {
        cy.visit(
            'http://localhost:6006/iframe.html?globals=&args=&id=products-server-rendered--default&viewMode=story'
        )
        cy.get('h2').should('have.text', 'Products')
    })
    // test that the component renders the products
    it('renders at least one item', () => {
        cy.visit(
            'http://localhost:6006/iframe.html?globals=&args=&id=products-server-rendered--default&viewMode=story'
        )
        cy.get('li').should('have.length.gt', 0)
    })
    // test that the component renders the product title
    it('renders product title', () => {
        cy.visit(
            'http://localhost:6006/iframe.html?globals=&args=&id=products-server-rendered--default&viewMode=story'
        )
        cy.get('li')
            .first()
            .get('h3')
            .should('exist')
            .invoke('text')
            .should('not.be.empty')
    })
    // test that the component renders the product details
    it('renders product details', () => {
        cy.visit(
            'http://localhost:6006/iframe.html?globals=&args=&id=products-server-rendered--default&viewMode=story'
        )
        cy.get('li')
            .find('p')
            .should('exist')
            .invoke('text')
            .should('not.be.empty')
    })
    // test that the component shows an error message if the API call fails
    it('shows error message if the API returns a 500 status code', () => {
        // set up the API call to return a 500 status code
        cy.intercept('GET', apiURL, {
            statusCode: 500,
        })

        cy.visit(
            'http://localhost:6006/iframe.html?globals=&args=&id=products-server-rendered--default&viewMode=story'
        )

        cy.contains('Something went wrong...').should('be.visible')
    })
})
