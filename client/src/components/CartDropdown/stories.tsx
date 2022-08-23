import { Story, Meta } from '@storybook/react/types-6-0';
import cartListMock from 'components/CartList/mock';

import CartDropdown, { CartDropdownProps } from '.';

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: cartListMock,
    total: 'R$ 300,00',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<CartDropdownProps> = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
);
