import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
  createHashHistory,
} from '@tanstack/react-router'

// Import the generated route tree
import { queryClient } from './client'
import { QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routes'
import { DataProvider } from './context/DataContext'


// Create a new router instance
const hashHistory = createHashHistory()

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  history: hashHistory,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </QueryClientProvider>
    </StrictMode>,
  )
}
