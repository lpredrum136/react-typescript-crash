import { Dispatch, ReactNode, createContext, useReducer } from 'react'
import { PostActionType, postReducer } from '../reducers/PostReducer'
import axios from 'axios'
import { PostActionStaticType } from '../reducers/types'

interface IPostContextProps {
  children: ReactNode
}

export interface IPost {
  id: number
  title: string
  body: string
}

type PostContextType = {
  posts: IPost[]
  getAllPosts: () => void
  dispatch: Dispatch<PostActionType> // optional if you want to dispatch from component
}

const initialPostState: IPost[] = []

export const PostContext = createContext<PostContextType>({
  posts: initialPostState,
  getAllPosts: () => null, // or () => {}
  dispatch: () => null
})

const PostContextProvider = ({ children }: IPostContextProps) => {
  const [posts, dispatch] = useReducer(postReducer, initialPostState)

  const { GET_POSTS } = PostActionStaticType

  const getAllPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    )
    dispatch({
      type: GET_POSTS,
      payload: response.data
    })
  }

  const postContextData: PostContextType = {
    posts,
    getAllPosts,
    dispatch
  }

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
