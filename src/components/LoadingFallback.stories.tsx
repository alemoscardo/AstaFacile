import type { Meta, StoryObj } from '@storybook/react'
import LoadingFallback from './LoadingFallback'

const meta = {
  title: 'Components/LoadingFallback',
  component: LoadingFallback,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Loading fallback components for different contexts with appropriate visual feedback.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'particles', 'cursor', 'testimonials', 'whatsapp', 'progress'],
      description: 'Type of loading fallback to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingFallback>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default loading spinner for general use cases.',
      },
    },
  },
}

export const Particles: Story = {
  args: {
    type: 'particles',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Fallback for particle background while loading. Shows gradient background.',
      },
    },
  },
}

export const Testimonials: Story = {
  args: {
    type: 'testimonials',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Skeleton loading for testimonials section with animated placeholders.',
      },
    },
  },
}

export const WhatsApp: Story = {
  args: {
    type: 'whatsapp',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state for floating WhatsApp button.',
      },
    },
  },
}

export const Progress: Story = {
  args: {
    type: 'progress',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading fallback for scroll progress indicator (returns null as it\'s non-essential).',
      },
    },
  },
}

export const Cursor: Story = {
  args: {
    type: 'cursor',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading fallback for custom cursor (returns null as it\'s non-essential).',
      },
    },
  },
}

export const WithCustomClass: Story = {
  args: {
    type: 'default',
    className: 'bg-blue-50 p-8 rounded-xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading fallback with custom styling applied.',
      },
    },
  },
}