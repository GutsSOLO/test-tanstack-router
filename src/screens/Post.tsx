import { useQuery } from "@tanstack/react-query"
import { postQueryOptions } from "../queries/postsQuery"
import { postRoute } from "../routes"

function Post() {
  const { postId } = postRoute.useParams()
  const { data: post } = useQuery({
    ...postQueryOptions(postId),
    suspense: true,
  })
  console.log('post', post)
  return (
    <div className='app'>
      <h4 className="text-xl font-bold underline">{post?.title}</h4>
      <div className="text-sm">{post?.body}</div>
    </div>
  )
}

export default Post
