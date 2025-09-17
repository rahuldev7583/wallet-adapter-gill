'use client';

import { WalletProvider } from './WalletContext';
import { WalletConnect } from './WalletConnect';
import WalletPage from './WalletPage';

export default function Home() {
  return (
    <div>
      <h1 className='text-2xl mt-4 ml-[40%]'>Solana Wallet Adapter</h1>
      <WalletProvider>
        <WalletConnect />
        <WalletPage />
      </WalletProvider>
    </div>
  );
}
