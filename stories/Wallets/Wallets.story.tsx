import React from 'react';
import { storiesOf } from '@storybook/react';

import Top from './Top/_Top';
import FindByAddress from './FindByAddress/_FindByAddress';

const stories = storiesOf('Wallets', module);

stories.add('Top', () => <Top />).add('Find By Address', () => <FindByAddress />);
