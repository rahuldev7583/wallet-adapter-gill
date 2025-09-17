'use client';

import { createSolanaClient } from 'gill';
import { SolanaProvider } from '@gillsdk/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const solanaClient = createSolanaClient({
  urlOrMoniker: process.env.NEXT_PUBLIC_RPC_URL || 'devnet',
});

export function GillProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SolanaProvider client={solanaClient}>{children}</SolanaProvider>
    </QueryClientProvider>
  );
}
