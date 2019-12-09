import React from 'react';
import { storiesOf } from '@storybook/react';

import Top from './Top/_StorybookTabs';
import Top10 from './Top10/_StorybookTabs';
import All from './All/_StorybookTabs';
import AllDevnet from './AllDevnet/_StorybookTabs';

const stories = storiesOf('Delegates', module);

stories
  .add('Top', () => <Top />)
  .add('Top 10', () => <Top10 />)
  .add('All', () => <All />)
  .add('All - Devnet', () => <AllDevnet />);
