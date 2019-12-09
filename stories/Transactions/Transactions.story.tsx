import React from 'react';
import { storiesOf } from '@storybook/react';

import Latest from './Latest/_StorybookTabs';
import Latest10 from './Latest10/_StorybookTabs';
import LatestDevnet from './LatestDevnet/_StorybookTabs';
import FindById from './FindById/_StorybookTabs';
import FindByBlockId from './FindByBlockId/_StorybookTabs';

const stories = storiesOf('Transactions', module);

stories
  .add('Latest', () => <Latest />)
  .add('Latest 10', () => <Latest10 />)
  .add('Latest - Devnet', () => <LatestDevnet />)
  .add('Find By ID', () => <FindById />)
  .add('Find By Block ID', () => <FindByBlockId />);
