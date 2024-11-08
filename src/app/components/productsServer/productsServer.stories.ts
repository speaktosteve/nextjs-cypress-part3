import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ProductsServer } from './productsServer'

const meta = {
    title: 'Products (Server Rendered)',
    component: ProductsServer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
} satisfies Meta<typeof ProductsServer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
