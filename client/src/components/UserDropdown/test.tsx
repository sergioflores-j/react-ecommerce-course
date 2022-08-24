import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Sergio" />);

    expect(screen.getByText(/Sergio/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Sergio" />);

    userEvent.click(screen.getByText(/Sergio/i));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
