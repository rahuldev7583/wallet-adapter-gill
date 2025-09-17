'use client';

import React from 'react';
import { useWallet } from './WalletContext';

const WalletPage = () => {
  const { account, wallet } = useWallet();

  console.log({ account });
  console.log({ wallet });

  return (
    wallet && (
      <div className='ml-10 mt-4'>
        <h1 className='text-xl mt-8'>
          Connected to
          <span className='font-bold'> {account?.address}</span>
        </h1>
      </div>
    )
  );
};

export default WalletPage;
