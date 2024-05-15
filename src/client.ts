const ONE_MINUTE_IN_MS = 60 * 1000; // 60 seconds * 1000 milliseconds
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

import { QueryClient, DefaultOptions } from '@tanstack/react-query'

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 5 * ONE_MINUTE_IN_MS,
    cacheTime: 1 * ONE_DAY_IN_MS,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retryOnMount: true,
  },
}

export const createQueryClient = () => {
  const queryClient = new QueryClient({ defaultOptions })
  return queryClient
}

export const queryClient = createQueryClient()