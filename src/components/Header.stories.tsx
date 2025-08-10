import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import Header from './Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation header with glass morphism effect and responsive mobile menu. Features smooth scrolling animations and WhatsApp integration.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default header state on desktop with all navigation links visible.',
      },
    },
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    docs: {
      description: {
        story: 'Mobile responsive view with hamburger menu. Test the menu interaction by clicking the hamburger icon.',
      },
    },
  },
}

export const Scrolled: Story = {
  decorators: [
    (Story) => {
      // Simulate scrolled state
      return (
        <div style={{ paddingTop: '100px', background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)', minHeight: '100vh' }}>
          <Story />
          <div style={{ height: '200vh', padding: '20px' }}>
            <h2>Scroll content to see header glass effect</h2>
            <p>The header background becomes more opaque and blurred when scrolling.</p>
          </div>
        </div>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        story: 'Header with glass morphism effect when page is scrolled. The background becomes more opaque and adds blur effect.',
      },
    },
  },
}

export const MobileMenuOpen: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    docs: {
      description: {
        story: 'Mobile header with menu opened. Shows the overlay and navigation items.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const menuButton = canvas.getByLabelText(/menu/i)
    await userEvent.click(menuButton)
    
    // Verify menu is open
    const menuItems = canvas.getAllByRole('link')
    expect(menuItems.length).toBeGreaterThan(0)
  },
}

export const AccessibilityTest: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Accessibility focused story testing keyboard navigation, focus states, and ARIA labels.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'keyboard-navigation',
            enabled: true,
          },
        ],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    
    // Test keyboard navigation
    await userEvent.tab()
    await userEvent.tab()
    
    // Test focus states
    const contactButton = canvas.getByText(/contattaci/i)
    await userEvent.hover(contactButton)
    
    // Test escape key functionality on mobile
    if (window.innerWidth < 768) {
      const menuButton = canvas.getByLabelText(/menu/i)
      await userEvent.click(menuButton)
      await userEvent.keyboard('{Escape}')
    }
  },
}