import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './productCard'

const meta = {
    title: 'Product Card (Server Rendered)',
    component: ProductCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        product: {
            id: 1,
            title: 'Fancy Product',
            price: '$100',
            category: 'Fancy Category',
            description: 'Fancy Description',
            image: 'https://via.placeholder.com/150',
        },
    },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
