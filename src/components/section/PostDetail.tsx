import React from 'react'
import { useParams } from 'react-router-dom'
import { allPosts } from 'content-collections'
import MarkdownRenderer from '../MarkdownRenderer'

const PostDetail: React.FC = () => {
  const { postId } = useParams()
  const post = allPosts.find((p) => p.id == Number(postId))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="my-20 flex w-full max-w-xl flex-col items-center justify-center px-10 xl:max-w-none xl:px-20">
      <h2 className="mb-3 text-center text-4xl font-bold">{post.title}</h2>
      <p className="mb-4 text-center text-sm text-gray-500">{post.summary}</p>
      <MarkdownRenderer content={post.content} />
    </div>
  )
}

export default PostDetail
