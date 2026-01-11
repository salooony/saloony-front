import type { Preview } from '@storybook/nextjs-vite';
import type { Decorator } from '@storybook/react';

import { ConfigProvider } from '../src/contexts/ConfigContext';
import ThemeCustomization from '../src/themes';
import Locales from '../src/components/Locales';

const withAppProviders: Decorator = (Story) => (
  <ConfigProvider>
    <ThemeCustomization>
      <Locales>
        <Story />
      </Locales>
    </ThemeCustomization>
  </ConfigProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [withAppProviders]
};

export default preview;
