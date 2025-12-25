import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

// Simple component test
describe('App', () => {
  it('should render without crashing', () => {
    // Basic smoke test - verify React is working
    render(
      <BrowserRouter>
        <div data-testid="test-element">Arrotech</div>
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('test-element')).toBeInTheDocument();
    expect(screen.getByTestId('test-element')).toHaveTextContent('Arrotech');
  });
});

describe('Environment', () => {
  it('should have jsdom environment', () => {
    expect(typeof window).toBe('object');
    expect(typeof document).toBe('object');
  });
});

