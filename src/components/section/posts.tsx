import React from 'react'
import { useNavigate } from 'react-router-dom'
import { allPosts } from 'content-collections'

const Posts: React.FC = () => {
  const navigate = useNavigate()

  const handleCardClick = (postId: number) => {
    navigate(`/posts/${postId}`)
  }

  return (
    <div className="my-20 flex w-full max-w-xl flex-col items-center justify-center px-10 xl:max-w-none xl:px-20">
      <h2 className="mb-3 text-center text-4xl font-bold">my findings.</h2>
      <p className="text-center text-lg font-light">some cool stuff that i learned recently 🚀</p>
      <div className="mt-20 grid w-full grid-cols-1 gap-10 xl:grid-cols-2">
        {allPosts.map((post) => (
          <div
            key={post.id}
            className="cursor-pointer rounded-lg bg-white p-6 shadow-md"
            onClick={() => handleCardClick(post.id)}
          >
            <h3 className="mb-2 text-2xl font-bold">{post.title}</h3>
            <p className="mb-4 text-sm text-gray-500">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
