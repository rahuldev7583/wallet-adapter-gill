'use client';

import { WalletProvider } from './WalletContext';
import { WalletConnect } from './WalletConnect';
import WalletPage from './WalletPage';
import { GillProvider } from './GillProvider';

export default function Home() {
  return (
    <div>
      <h1 className='text-2xl mt-4 ml-[40%]'>Solana Wallet Adapter</h1>
      <WalletProvider>
        <WalletConnect />
        <GillProvider>
          <WalletPage />
        </GillProvider>
      </WalletProvider>
    </div>
  );
}
