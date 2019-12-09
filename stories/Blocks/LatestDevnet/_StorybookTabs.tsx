import React from 'react';

import StorybookTabComponent from '../../_StorybookTabComponent/StorybookTabComponent';
import Demo from './LatestDevnet';

const jsx = `import React from 'react';

import { useBlocksLatest } from '../../../src';
import { Network } from '../../../src/common/network';

const LatestDevnet = () => {
  const [{ response, isLoading, error }] = useBlocksLatest(1, 10, true, Network.DEVNET);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data</div>}
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

export default LatestDevnet;`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
