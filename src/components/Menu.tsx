import { Link } from '@tanstack/react-router'
import { useDataContext } from '../context/DataContext'

const Menu = () => {
  const { posts } = useDataContext()
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>{' '}
      <Link to="/posts" className="[&.active]:font-bold">
        Posts
      </Link>
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

export default Menu