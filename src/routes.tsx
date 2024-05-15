import {
  Outlet,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'

import Home from './screens/Home'
import { postsQueryOptions, postQueryOptions } from './queries/postsQuery'
import Posts from './screens/Posts'
import Menu from './components/Menu'
import Post from './screens/Post'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <Home />
    )
  },
})

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>
  },
})

export const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loader: ({ context: { queryClient } }: any) =>
    queryClient.ensureQueryData(
      postsQueryOptions(),
    ),
  component: Posts,
})

export const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loader: ({ context: { queryClient }, params: { postId } }: any) =>
    queryClient.ensureQueryData(postQueryOptions(postId)),
  component: Post,
})

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Menu />
      <hr />
      <Outlet />
    </>
  ),
})

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, postsRoute, postRoute])