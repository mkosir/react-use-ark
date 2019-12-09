import React from 'react';

import StorybookTabComponent from '../../_StorybookTabComponent/StorybookTabComponent';
import Demo from './FindById';

const jsx = `import React, { useState } from 'react';

import { useTransactionsFindById } from '../../../src';

const FindById = () => {
  const [id, setId] = useState('faa12ecb0c9da6e23b93dc3bbb27fd619a4e45685d31e63586e0c0ccd456d3b0');
  const [{ response, isLoading, error }, fetch] = useTransactionsFindById(id);

  return (
    <>
      <div className="find">
        Transaction ID:
        <input type="text" value={id} onChange={ev => setId(ev.target.value)} />
        <button className="fetch" onClick={fetch}>
          Find
        </button>
      </div>
      {error && <div>Error fetching data: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {response && (
        <ol className="list">
          <li key={response.data.id}>
            <div>
              <div>Amount: </div>
              <div>{response.data.amount}</div>
            </div>
            <div>
              <div>Fee: </div>
              <div>{response.data.fee}</div>
            </div>
            <div>
              <div>Sender: </div>
              <div>{response.data.sender}</div>
            </div>
            <div>
              <div>Recipient: </div>
              <div>{response.data.recipient}</div>
            </div>
            <div>
              <div>Block ID: </div>
              <div>{response.data.blockId}</div>
            </div>
            <div>
              <div>Confirmations: </div>
              <div>{response.data.confirmations}</div>
            </div>
          </li>
        </ol>
      )}
    </>
  );
};

export default FindById;`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
