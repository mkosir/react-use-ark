import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './Top.demotab';

const code = `import React from 'react';

import { useDelegatesTop } from '../../../src';

const Top = () => {
  const [{ response, isLoading, error }, fetch] = useDelegatesTop();

  return (
    <>
      <button className="fetch" onClick={fetch}>
        Fetch
      </button>
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

export default Top;
`;

const _Top = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _Top;
