import type { Meta, StoryObj } from '@storybook/react';
import { FormattedMessage } from 'react-intl';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Locales from 'components/Locales';
import useConfig from 'hooks/useConfig';

const meta: Meta<typeof Locales> = {
  title: 'Components/Locales',
  component: Locales,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Wraps children with IntlProvider bound to the global config. Story includes simple controls to swap locales.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const LocaleContent = () => {
  const { i18n, onChangeLocalization } = useConfig();

  return (
    <Stack spacing={2}>
      <Typography variant="body1">
        <FormattedMessage id="sample-page" defaultMessage="Sample page" />
      </Typography>
      <Stack direction="row" spacing={1}>
        {['en', 'fr', 'ro', 'zh'].map((lang) => (
          <Button
            key={lang}
            variant={i18n === lang ? 'contained' : 'outlined'}
            size="small"
            onClick={() => onChangeLocalization(lang as any)}
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export const Default: Story = {
  render: () => (
    <Locales>
      <LocaleContent />
    </Locales>
  )
};
