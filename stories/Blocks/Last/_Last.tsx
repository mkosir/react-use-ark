import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './Last.storytab';

const code = `import React from 'react';

import { useBlocksLast } from '../../../src';

const Last = () => {
  const [{ response, isLoading, error }] = useBlocksLast(true);

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

export default Last;
`;

const _Last = () => (
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _Last;
