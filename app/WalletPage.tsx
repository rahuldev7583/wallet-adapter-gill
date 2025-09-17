'use client';

import React from 'react';
import { useWallet } from './WalletContext';
import { useBalance } from '@gillsdk/react';

const WalletPage = () => {
  const { account, wallet, connectedWallet, isConnected, setConnectedWallet } =
    useWallet();
  const { balance } = useBalance({
    address: account?.address,
  });
  console.log({ account });
  console.log({ wallet });

  console.log({ balance });

  return (
    wallet && (
      <div className='ml-10 mt-4'>
        <button
          className='bg-black text-white px-3 py-2 rounded-xl  ml-[40%] mt-8'
          onClick={() => setConnectedWallet(null)}
        >
          Disconnect
        </button>
        <h1 className='text-xl mt-8'>
          Connected to
          <span className='font-bold'> {account?.address}</span>
        </h1>
        <h2 className='font-semibold text-xl'>
          Balance
          <span className='ml-2'>
            {balance ? `${(Number(balance) / 1e9).toFixed(4)} SOL` : '0 SOL'}
          </span>
        </h2>
      </div>
    )
  );
};

export default WalletPage;
