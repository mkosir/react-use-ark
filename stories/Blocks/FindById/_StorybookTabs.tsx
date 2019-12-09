import React from 'react';

import StorybookTabComponent from '../../_StorybookTabComponent/StorybookTabComponent';
import Demo from './FindById';

const jsx = `import React, { useState } from 'react';

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
