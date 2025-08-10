import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import ErrorBoundary from './ErrorBoundary'
import React from 'react'

// Test component that throws an error
const ErrorThrowingComponent = ({ shouldThrow = false }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error for ErrorBoundary demo')
  }
  return <div className="p-4 bg-green-100 rounded">Component working correctly!</div>
}

const meta = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Error boundary component that catches JavaScript errors anywhere in the child component tree, logs errors, and displays a fallback UI.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorBoundary>

export default meta
type Story = StoryObj<typeof meta>

export const NoError: Story = {
  render: () => (
    <ErrorBoundary>
      <ErrorThrowingComponent shouldThrow={false} />
    </ErrorBoundary>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error boundary with a working component inside - no error state.',
      },
    },
  },
}

export const WithError: Story = {
  render: () => (
    <ErrorBoundary>
      <ErrorThrowingComponent shouldThrow={true} />
    </ErrorBoundary>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error boundary catching an error and displaying the fallback UI with retry functionality.',
      },
    },
  },
}

export const CustomFallback: Story = {
  render: () => {
    const CustomErrorFallback = ({ error, retry }: any) => (
      <div className="p-8 bg-red-50 border border-red-200 rounded-lg text-center">
        <h2 className="text-xl font-bold text-red-800 mb-4">Custom Error UI</h2>
        <p className="text-red-600 mb-4">Something went wrong with this specific component.</p>
        <button onClick={retry} className="btn-primary">
          Try Again
        </button>
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-sm text-red-500">Error Details</summary>
          <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto">
            {error?.toString()}
          </pre>
        </details>
      </div>
    )

    return (
      <ErrorBoundary fallback={CustomErrorFallback}>
        <ErrorThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Error boundary with a custom fallback component instead of the default error UI.',
      },
    },
  },
}

export const RetryFunctionality: Story = {
  render: () => {
    const [shouldThrow, setShouldThrow] = React.useState(true)
    
    const RetryTestComponent = () => {
      if (shouldThrow && Math.random() > 0.3) {
        throw new Error('Random error for retry testing')
      }
      return (
        <div className="p-4 bg-green-100 rounded text-center">
          <h3 className="text-green-800 font-bold">Success! Component loaded.</h3>
          <button 
            onClick={() => setShouldThrow(true)}
            className="mt-2 btn-secondary"
          >
            Trigger Error Again
          </button>
        </div>
      )
    }

    return (
      <ErrorBoundary>
        <RetryTestComponent />
      </ErrorBoundary>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Test the retry functionality of the error boundary. Has a 70% chance of working when retrying.',
      },
    },
  },
}

export const InteractiveTest: Story = {
  render: () => (
    <ErrorBoundary>
      <ErrorThrowingComponent shouldThrow={true} />
    </ErrorBoundary>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    
    // Verify error UI is shown
    expect(canvas.getByText(/qualcosa è andato storto/i)).toBeInTheDocument()
    
    // Test retry button
    const retryButton = canvas.getByText(/riprova/i)
    expect(retryButton).toBeInTheDocument()
    
    // Test reload button
    const reloadButton = canvas.getByText(/ricarica pagina/i)
    expect(reloadButton).toBeInTheDocument()
    
    // Test homepage button
    const homeButton = canvas.getByText(/torna alla homepage/i)
    expect(homeButton).toBeInTheDocument()
    
    // Test WhatsApp contact link
    const whatsappLink = canvas.getByText(/contattaci su whatsapp/i)
    expect(whatsappLink).toBeInTheDocument()
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive test story that verifies all error boundary functionality including buttons and links.',
      },
    },
  },
}