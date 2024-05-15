import axios from "axios"

export type PostType = {
  id: string
  title: string
  body: string
}

export const fetchPosts = async () => {
  console.log('Fetching posts...')
  await new Promise((r) => setTimeout(r, 500))
  return axios
    .get<PostType[]>('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.data.slice(0, 10))
}

export const fetchPost = async (postId: string) => {
  console.log(`Fetching post with id ${postId}...`)
  await new Promise((r) => setTimeout(r, 500))
  const post = await axios
    .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data)

  if (!post) {
    throw new Error(`Post with id "${postId}" not found!`)
  }

  return post
}

export const postsQueryOptions = () => ({
  queryKey: ['posts'],
  queryFn: () => fetchPosts(),
})

export const postQueryOptions = (postId: string) => ({
  queryKey: ['post'],
  queryFn: () => fetchPost(postId),
})