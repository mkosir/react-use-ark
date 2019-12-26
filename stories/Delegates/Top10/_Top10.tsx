import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './Top10.storytab';

const code = `import React from 'react';

import { useDelegatesTop } from '../../../src';

const Top10 = () => {
  const [{ response, isLoading, error }] = useDelegatesTop(1, 10, true);

  return (
    <>
      {error && <div>Error fetching data</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response && (
          <ol className="list">
            {response.data.map(delegate => (
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

export default Top10;
`;

const _Top10 = () => (
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _Top10;
