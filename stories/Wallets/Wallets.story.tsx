import React from 'react';
import { storiesOf } from '@storybook/react';

import Top from './Top/_StorybookTabs';
import FindByAddress from './FindByAddress/_StorybookTabs';

const stories = storiesOf('Wallets', module);

stories.add('Top', () => <Top />).add('Find By Address', () => <FindByAddress />);
