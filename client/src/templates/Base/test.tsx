import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Base from '.';

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />;
  },
}));

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer" />;
  },
}));

describe('<Base />', () => {
  it('should render the menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    );

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument();
  });
});
