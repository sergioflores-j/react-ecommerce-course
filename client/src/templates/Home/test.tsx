import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    // Header
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    // Footer
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    // Sections
    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Upcoming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument();

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // card game
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3);
  });
});
