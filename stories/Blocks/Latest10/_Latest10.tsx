import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './Latest10.storytab';

const code = `import React from 'react';

import { useBlocksLatest } from '../../../src';

const Latest10 = () => {
  const [{ response, isLoading, error }] = useBlocksLatest(1, 10, true);

  return (
    <>
      {error && <div>Error fetching data</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response && (
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
