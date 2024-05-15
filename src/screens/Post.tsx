import { useQuery } from "@tanstack/react-query"
import { postsQueryOptions } from "../queries/postsQuery"
import { Link } from "@tanstack/react-router"

function Posts() {
  const { data: posts } = useQuery({
    ...postsQueryOptions(),
    suspense: true,
  })
  console.log('posts', posts)
  return (
    <div className='app'>
      <h1>Posts</h1>
      {posts && posts.map(
          (post) => {
            return (
                <Link
                  key={post.id} 
                  to="/posts/$postId"
                  params={{
                    postId: post.id,
                  }}
                  className="block py-1 text-blue-800 hover:text-blue-600 [&.active]:font-bold"
                  activeProps={{ className: 'text-black font-bold' }}
                >
                  <div>{post.title.substring(0, 20)}</div>
                </Link>
            )
          },
        )}
    </div>
  )
}

export default Posts
