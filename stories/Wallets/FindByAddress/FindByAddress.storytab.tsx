import React, { useState } from 'react';

import { useWalletsFindByAddress } from '../../../src';

const FindByAddress = () => {
  const [walletAddress, setWalletAddress] = useState('AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv');
  const [{ response, isLoading, error }, fetch] = useWalletsFindByAddress(walletAddress);

  return (
    <>
      <div className="find">
        Wallet Address:
        <input
          type="text"
          value={walletAddress}
          onChange={ev => setWalletAddress(ev.target.value)}
        />
        <button className="fetch" onClick={fetch}>
          Find
        </button>
      </div>
      {error && <div>Error fetching data: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {response && (
        <ol className="list">
          <li key={response.data.address}>
            <div>
              <div>Address: </div>
              <div>{response.data.address}</div>
            </div>
            <div>
              <div>Balance: </div>
              <div>{response.data.balance}</div>
            </div>
            <div>
              <div>Is delegate: </div>
              <div>{response.data.isDelegate ? 'Yes' : 'No'}</div>
            </div>
            <div>
              <div>Public key: </div>
              <div>{response.data.publicKey}</div>
            </div>
          </li>
        </ol>
      )}
    </>
  );
};

export default FindByAddress;
