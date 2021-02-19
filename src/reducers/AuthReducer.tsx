import { AuthActionStaticType } from './types'

type AuthStateType = boolean

// export type AuthActionType =
//   | {
//       type: 'TOGGLE_AUTH'
//       payload: boolean | null
//     }
//   | {
//       type: 'SOME_TYPE'
//       payload: string
//     } // any other action type & payload, for example, but here when we have declared all types in types.tsx, we don't really need this.
// We only need it like this when we hardcode string in type field

// Or a shorter way but all action must follow same format
export type AuthActionType = {
  type: AuthActionStaticType
  payload: null
}

export const authReducer = (state: AuthStateType, action: AuthActionType) => {
  const { TOGGLE_AUTH } = AuthActionStaticType

  switch (action.type) {
    case TOGGLE_AUTH:
      return !state

    default:
      return state
  }
}
