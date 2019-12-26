import React from 'react';
import { storiesOf } from '@storybook/react';

import Latest from './Latest/_Latest';
import Latest10 from './Latest10/_Latest10';
import LatestDevnet from './LatestDevnet/_LatestDevnet';
import FindById from './FindById/_FindById';
import FindByBlockId from './FindByBlockId/_FindByBlockId';

const stories = storiesOf('Transactions', module);

stories
  .add('Latest', () => <Latest />)
  .add('Latest 10', () => <Latest10 />)
  .add('Latest - Devnet', () => <LatestDevnet />)
  .add('Find By ID', () => <FindById />)
  .add('Find By Block ID', () => <FindByBlockId />);
