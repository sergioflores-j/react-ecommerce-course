import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Dropdown from '.';

describe('<Dropdown />', () => {
  it('should render title', () => {
    renderWithTheme(
      <Dropdown title={<h1 aria-label="toggle dropdown">Click here</h1>}>
        <span>content</span>
      </Dropdown>
    );

    expect(screen.getByLabelText(/toggle dropdown/)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', () => {
    renderWithTheme(
      <Dropdown title={<h1 aria-label="toggle dropdown">Click here</h1>}>
        <span>content</span>
      </Dropdown>
    );

    const content = screen.getByText(/content/).parentElement!;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByLabelText(/toggle dropdown/));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });
});
