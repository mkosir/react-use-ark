# ![ark logo](ark.png) react-use-ark

[![Build Status][build-badge]][build-url]
[![npm version][npm-badge]][npm-url]
[![TypeScript][typescript-badge]][typescript-url]

_React hook to easily access [ARK blockchain Ѧ](https://ark.io/) API._

### Links

ARK API [documentation](https://api.ark.dev/).

ARK blockchain explorer [official website](https://explorer.ark.io/).

Official ARK client SDK for [TypeScript](https://github.com/ArkEcosystem/typescript-client).

## Demo

**[Demos](https://mkosir.github.io/react-use-ark)** created with [React DemoTab 📑](https://github.com/mkosir/react-demo-tab)

## Install

```bash
npm install react-use-ark
```

## Usage

Simply import ARK hooks that you wish to fetch data in your React application.  
Each hook:

- starts with a resource name as `'useTransactions...'`, `'useBlocks...'`, `'useDelegates...'`, `'useWallets...'`.
- always returns the same state object `{ response, isLoading, error }` where `response` type is defined to easily access it's properties.
- accepts `fetchOnMount` boolean argument, which can be used as an utility to cover common pattern of data fetching when component mounts.
- accepts `network` argument which is an enumeration object `'DEVNET | MAINNET | TESTNET'` or user defined string (localhost). Set it appropriately to your needs, depending on running relay.

```jsx
import React from 'react';
import { useTransactionsLatest } from 'react-use-ark';

const App = () => {
  // Get 20 latest transactions when App component mounts.
  const [{ response, isLoading, error }] = useTransactionsLatest(1, 20, true);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data: {error}</div>}
      {response && (
        <ul>
          {response.data.map(transaction => (
            <li key={transaction.id}>
              <div>Amount: {transaction.amount}</div>
              <div>Fee: {transaction.fee}</div>
              <div>Sender: {transaction.sender}</div>
              <div>Recipient: {transaction.recipient}</div>
              <div>Block ID: {transaction.blockId}</div>
              <div>Confirmations: {transaction.confirmations}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Development

_Easily set up a local development environment!_

Build all the examples and starts storybook server on [localhost:9009](http://localhost:9009):

- clone
- `npm install`
- `npm start`

OR

Clone this repo on your machine, navigate to its location in the terminal and run:

```bash
npm install
npm link # link your local repo to your global packages
npm run build:watch # build the files and watch for changes
```

Clone project repo that you wish to test with react-use-ark library and run:

```bash
npm install
npm link react-use-ark # link your local copy into this project's node_modules
npm start
```

**Start coding!** 🎉

## Contributing

There are many [endpoints](https://api.ark.dev/) to cover and hooks to be created, all contributions are welcome!

[npm-url]: https://www.npmjs.com/package/react-use-ark
[npm-badge]: https://img.shields.io/npm/v/react-use-ark.svg
[build-badge]: https://travis-ci.com/mkosir/react-use-ark.svg
[build-url]: https://travis-ci.com/mkosir/react-use-ark
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
