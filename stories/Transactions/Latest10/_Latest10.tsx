import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './Latest10.storytab';

const code = `import React from 'react';

import { useTransactionsLatest } from '../../../src';

const Latest10 = () => {
  const [{ response, isLoading, error }] = useTransactionsLatest(1, 10, true);

  return (
    <>
      {error && (
        <div>
          <div>Error fetching data</div>
          <div>{error}</div>
        </div>
      )}
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

export default Latest10;
`;

const _Latest10 = () => (
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _Latest10;
