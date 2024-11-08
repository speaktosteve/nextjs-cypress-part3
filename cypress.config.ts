import { defineConfig } from 'cypress'

export default defineConfig({
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },

    watchForFileChanges: true,

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'src/app/components/**/*.e2e.cy.{js,ts,jsx,tsx}', // Change this to your preferred folder
    },
})
