import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from '../../contexts/PostContext'

const Posts = () => {
  const { posts, getAllPosts } = useContext(PostContext)

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            <br></br>
            {post.body}
          </li>
        ))}
      </ul>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Posts
