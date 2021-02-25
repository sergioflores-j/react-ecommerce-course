import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement).toHaveAttribute('aria-hidden', 'true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(fullMenuElement).toHaveAttribute('aria-hidden', 'false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(fullMenuElement).toHaveAttribute('aria-hidden', 'true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show the register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();

    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
  });

  it('should show the register box when logged in', () => {
    renderWithTheme(<Menu username="test" />);

    expect(screen.getByText(/my account/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
