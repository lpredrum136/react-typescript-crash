import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { authReducer, AuthActionType } from '../reducers/AuthReducer'

interface IAuthContextProps {
  children: ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean
  dispatch: Dispatch<AuthActionType>
}

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthContextProvider = ({ children }: IAuthContextProps) => {
  const [isAuthenticated, dispatch] = useReducer(authReducer, false)

  const authContextData: AuthContextType = {
    isAuthenticated,
    dispatch
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
