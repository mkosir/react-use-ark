import React from 'react';
import { storiesOf } from '@storybook/react';

import Top from './Top/_Top';
import Top10 from './Top10/_Top10';
import All from './All/_All';
import AllDevnet from './AllDevnet/_AllDevnet';

const stories = storiesOf('Delegates', module);

stories
  .add('Top', () => <Top />)
  .add('Top 10', () => <Top10 />)
  .add('All', () => <All />)
  .add('All - Devnet', () => <AllDevnet />);
