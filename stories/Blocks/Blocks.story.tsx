import React from 'react';
import { storiesOf } from '@storybook/react';

import Latest from './Latest/_StorybookTabs';
import Latest10 from './Latest10/_StorybookTabs';
import LatestDevnet from './LatestDevnet/_StorybookTabs';
import Last from './Last/_StorybookTabs';
import FindById from './FindById/_StorybookTabs';

const stories = storiesOf('Blocks', module);

stories
  .add('Latest', () => <Latest />)
  .add('Latest 10', () => <Latest10 />)
  .add('Latest - Devnet', () => <LatestDevnet />)
  .add('Last', () => <Last />)
  .add('Find By ID', () => <FindById />);
