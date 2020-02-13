import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './FindByBlockId.demotab';

const code = `import React, { useState } from 'react';

import { useTransactionsFindByBlockId } from '../../../src';

const FindByBlockId = () => {
  const [id, setId] = useState('d9f8857e7b8336e24bc5cddf4326720772e9215874d022de46ae268e65d27de6');
  const [{ response, isLoading, error }, fetch] = useTransactionsFindByBlockId(id, 1, 20, true);

  return (
    <>
      <div className="find">
        Block ID:
        <input type="text" value={id} onChange={ev => setId(ev.target.value)} />
        <button className="fetch" onClick={fetch}>
          Find
        </button>
      </div>
      {error && <div>Error fetching data: {error}</div>}
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

export default FindByBlockId;
`;

const _FindByBlockId = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _FindByBlockId;
