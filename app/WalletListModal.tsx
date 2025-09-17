import { WalletListItem } from './Wallet';
import { useWallet } from './WalletContext';
import { type UiWallet } from '@wallet-standard/react';

interface WalletListModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: UiWallet[];
}

export function WalletListModal({
  isOpen,
  onClose,
  wallets,
}: WalletListModalProps) {
  return (
    isOpen && (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
        <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Connect Wallet</h2>
            <button
              onClick={onClose}
              className='rounded px-2 py-1 text-gray-500 hover:bg-gray-100'
            >
              ✕
            </button>
          </div>
          <p className='mb-4 text-sm text-gray-600'>
            Select a wallet to connect to.
          </p>
          <div className='flex flex-col gap-2'>
            {wallets.map((wallet) => (
              <WalletListItem
                key={wallet.name}
                wallet={wallet}
                onConnect={onClose}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
}
