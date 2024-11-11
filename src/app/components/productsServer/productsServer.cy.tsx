import fakeProducts from '@fixtures/fakeProducts.json'
import { ProductsServer } from './productsServer'

describe('Tests for the <ProductsServer /> component', () => {
    let stub: ReturnType<typeof cy.stub>

    beforeEach(() => {
        cy.log('Adding stub to return stubbed response')
        // stub window.fetch
        stub = cy.stub(window, 'fetch')

        stub.resolves({
            json: cy.stub().resolves(fakeProducts),
            ok: true,
        })
    })

    it('renders component', async () => {
        cy.mount(await ProductsServer())
    })
    // test that the component shows the correct header
    it('renders header', async () => {
        cy.mount(await ProductsServer())

        cy.get('h2').should('have.text', 'Products')
    })
    // test that the component renders the products
    it('renders at least one item', async () => {
        cy.mount(await ProductsServer())

        cy.get('li').should('have.length.gt', 0)
    })
    // test that the component renders the product title
    it('renders product title', async () => {
        cy.mount(await ProductsServer())

        cy.get('ul > li:first')
            .find('h3')
            .should('have.text', 'Fake Product From The Stubbed Data')
    })
    // test that the component renders the product details
    it('renders product details', async () => {
        cy.mount(await ProductsServer())

        cy.get('li')
            .find('p')
            .should('exist')
            .invoke('text')
            .should('not.be.empty')
    })
    // test that the component shows an error message if the API call fails
    it('shows error message if the API returns a 500 status code', async () => {
        stub.restore()
        // set up the API call to return a 500 status code
        cy.stub(window, 'fetch').resolves({
            status: 500,
        })
        cy.mount(await ProductsServer())

        cy.contains('Something went wrong...').should('be.visible')
    })
})
