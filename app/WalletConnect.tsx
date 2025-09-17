import { useWallet } from './WalletContext';
import { useWallets } from '@wallet-standard/react';
import { WalletListModal } from './WalletListModal';
import { useState } from 'react';

export function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wallets = useWallets();
  const { isConnected } = useWallet();

  const solanaWallets = wallets.filter((wallet) =>
    wallet.chains.some((chain) => chain.startsWith('solana:'))
  );

  if (isConnected) {
    return null;
  }

  return (
    <>
      <button
        className='bg-black text-white px-3 py-2 rounded-xl  ml-[40%] mt-8'
        onClick={() => setIsModalOpen(true)}
      >
        Connect Wallet
      </button>
      <WalletListModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        wallets={solanaWallets}
      />
    </>
  );
}
