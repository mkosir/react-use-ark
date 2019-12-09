import React from 'react';

import StorybookTabComponent from '../../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Latest';

const jsx = `import React from 'react';

import { useBlocksLatest } from '../../../src';

const Latest = () => {
  const [{ response, isLoading, error }, fetch] = useBlocksLatest();

  return (
    <>
      <button className="fetch" onClick={fetch}>
        Fetch
      </button>
      {error && <div>Error fetching data</div>}
      {isLoading && <div>Loading...</div>}
      {response && (
        <ol className="list">
          {response.data.map(block => (
            <li key={block.id}>
              <div>
                <div>ID: </div>
                <div>{block.id}</div>
              </div>
              <div>
                <div>Height: </div>
                <div>{block.height}</div>
              </div>
              <div>
                <div>Timestamp: </div>
                <div>{block.timestamp.human}</div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Latest;`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
