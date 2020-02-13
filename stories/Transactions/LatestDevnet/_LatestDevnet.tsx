import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './LatestDevnet.demotab';

const code = `import React from 'react';

import { useTransactionsLatest, Network } from '../../../src';

const LatestDevnet = () => {
  const [{ response, isLoading, error }] = useTransactionsLatest(1, 10, true, Network.DEVNET);

  return (
    <>
      {error && <div>Error fetching data</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response && (
          <ol className="list">
            {response.data.map(transaction => (
              <li key={transaction.id}>
                <div>
                  <div>Amount: </div>
                  <div>{transaction.amount}</div>
                </div>
                <div>
                  <div>Fee: </div>
                  <div>{transaction.fee}</div>
                </div>
                <div>
                  <div>Sender: </div>
                  <div>{transaction.sender}</div>
                </div>
                <div>
                  <div>Recipient: </div>
                  <div>{transaction.recipient}</div>
                </div>
                <div>
                  <div>Block ID: </div>
                  <div>{transaction.blockId}</div>
                </div>
                <div>
                  <div>Confirmations: </div>
                  <div>{transaction.confirmations}</div>
                </div>
              </li>
            ))}
          </ol>
        )
      )}
    </>
  );
};

export default LatestDevnet;
`;

const _LatestDevnet = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _LatestDevnet;
