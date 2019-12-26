import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './All.storytab';

const code = `import React from 'react';

import { useDelegatesAll } from '../../../src';

const All = () => {
  const [{ response, isLoading, error }] = useDelegatesAll(true);

  return (
    <>
      {error && <div>Error fetching data</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response && (
          <ol className="list">
            {response.map(delegate => (
              <li key={delegate.username}>
                <div>
                  <div>Username: </div>
                  <div>{delegate.username}</div>
                </div>
                <div>
                  <div>Votes: </div>
                  <div>{delegate.votes}</div>
                </div>
                <div>
                  <div>Rank: </div>
                  <div>{delegate.rank}</div>
                </div>
                <div>
                  <div>Address: </div>
                  <div>{delegate.address}</div>
                </div>
                <div>
                  <div>Public key: </div>
                  <div>{delegate.publicKey}</div>
                </div>
              </li>
            ))}
          </ol>
        )
      )}
    </>
  );
};

export default All;
`;

const _All = () => (
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _All;
