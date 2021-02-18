import { AuthActionStaticType } from './types'

type AuthStateType = boolean

export type AuthActionType =
  | {
      type: AuthActionStaticType
      payload: boolean
    }
  | {
      type: 'SOME_TYPE'
      payload: string
    } // any other action type & payload, for example

export const authReducer = (state: AuthStateType, action: AuthActionType) => {
  switch (action.type) {
    case 'TOGGLE_AUTH':
      return !state

    default:
      return state
  }
}
