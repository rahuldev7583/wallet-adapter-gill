import { UiWallet, useConnect, useDisconnect } from '@wallet-standard/react';
import { useEffect } from 'react';
import { useWallet } from './WalletContext';

interface WalletItemProps {
  onConnect: () => void;
  wallet: UiWallet;
}

export const WalletListItem = ({ wallet, onConnect }: WalletItemProps) => {
  const [isConnecting, connect] = useConnect(wallet);
  const [isDisconnecting, disconnect] = useDisconnect(wallet);
  const { setConnectedWallet, isConnected } = useWallet();

  useEffect(() => {
    if (isDisconnecting) {
      setConnectedWallet(null);
    }
  }, [isDisconnecting, setConnectedWallet]);

  const handleConnect = async () => {
    try {
      const connectedAccount = await connect();
      if (!connectedAccount.length) return;
      const first = connectedAccount[0];
      setConnectedWallet({ account: first, wallet });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <button
      onClick={isConnected ? disconnect : handleConnect}
      disabled={isConnecting}
      className='
        w-full p-4 h-auto flex items-center space-x-3 
        border border-neutral-800 rounded-2xl
        
        transition-all duration-200 
         disabled:opacity-50
      '
    >
      {wallet.icon ? (
        <img
          src={wallet.icon}
          alt={wallet.name}
          className='w-10 h-10 rounded-xl object-cover border border-neutral-700'
        />
      ) : (
        <div className='w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center border border-neutral-700'>
          <span className=' text-lg font-semibold'>
            {wallet.name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}

      <div className='flex-1 text-left'>
        <div className='font-semibold '>
          {isConnecting ? 'Connecting...' : wallet.name}
        </div>
        <div className='text-sm text-neutral-400'>
          {isConnecting
            ? 'Please wait...'
            : isConnected
            ? 'Connected — Click to disconnect'
            : 'Click to connect'}
        </div>
      </div>

      {isConnecting && (
        <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
      )}
    </button>
  );
};
