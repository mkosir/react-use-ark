import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './FindById.demotab';

const code = `import React, { useState } from 'react';

import { useBlocksFindById } from '../../../src';

const FindById = () => {
  const [id, setId] = useState('bb0500d0df0b910bc0c67ce890eb8b39ca9cec5687adff464278e09c902d3ce0');
  const [{ response, isLoading, error }, fetch] = useBlocksFindById(id);

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
      {isLoading && <div>Loading...</div>}
      {response && (
        <ol className="list">
          <li key={response.data.id}>
            <div>
              <div>ID: </div>
              <div>{response.data.id}</div>
            </div>
            <div>
              <div>Height: </div>
              <div>{response.data.height}</div>
            </div>
            <div>
              <div>Timestamp: </div>
              <div>{response.data.timestamp.human}</div>
            </div>
            <div>
              <div>Forged Amount: </div>
              <div>{response.data.forged.amount}</div>
            </div>
            <div>
              <div>Forged Fee: </div>
              <div>{response.data.forged.fee}</div>
            </div>
            <div>
              <div>Forged Reward: </div>
              <div>{response.data.forged.reward}</div>
            </div>
            <div>
              <div>Forged Total: </div>
              <div>{response.data.forged.total}</div>
            </div>
          </li>
        </ol>
      )}
    </>
  );
};

export default FindById;
`;

const _FindById = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _FindById;
