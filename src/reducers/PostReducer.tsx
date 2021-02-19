import { PostActionStaticType } from './types'
import { IPost } from '../contexts/PostContext'

type PostStateType = IPost[]

const { GET_POSTS, ADD_POST } = PostActionStaticType

export type PostActionType =
  | {
      type: typeof GET_POSTS
      payload: IPost[]
    }
  | {
      type: typeof ADD_POST
      payload: IPost
    }

export const postReducer = (state: PostStateType, action: PostActionType) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload

    case ADD_POST:
      return [...state, action.payload]

    default:
      return state
  }
}
