import React from 'react';

import { useDelegatesAll, Network } from '../../../src';

const AllDevnet = () => {
  const [{ response, isLoading, error }] = useDelegatesAll(true, Network.DEVNET);

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

export default AllDevnet;
