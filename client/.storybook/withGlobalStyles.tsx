import { StoryFn } from '@storybook/addons';
import GlobalStyles from '../src/styles/global';

// Renderiza o storybook com o wrapper global
const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles/>
    {storyFn()}
  </>
)

export default withGlobalStyles;
