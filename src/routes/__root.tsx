import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'

const RootComponent = () => (
  <>
  <div className="p-2 flex gap-2">
    <Link to="/" className="[&.active]:font-bold">
      Home
    </Link>{' '}
    <Link to="/about" className="[&.active]:font-bold">
      About
    </Link>
  </div>
  <hr />
  <Outlet />
  </>
)

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

