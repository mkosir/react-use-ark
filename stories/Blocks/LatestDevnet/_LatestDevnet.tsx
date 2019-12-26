import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './LatestDevnet.storytab';

const code = `import React from 'react';

import { useBlocksLatest, Network } from '../../../src';

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

export default LatestDevnet;
`;

const _LatestDevnet = () => (
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _LatestDevnet;
