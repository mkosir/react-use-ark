import React from 'react';
import { storiesOf } from '@storybook/react';

import Latest from './Latest/_Latest';
import Latest10 from './Latest10/_Latest10';
import LatestDevnet from './LatestDevnet/_LatestDevnet';
import Last from './Last/_Last';
import FindById from './FindById/_FindById';

const stories = storiesOf('Blocks', module);

stories
  .add('Latest', () => <Latest />)
  .add('Latest 10', () => <Latest10 />)
  .add('Latest - Devnet', () => <LatestDevnet />)
  .add('Last', () => <Last />)
  .add('Find By ID', () => <FindById />);
