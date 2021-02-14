import { createContext } from 'react'

type ThemeContextType = string

export const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }) => {
  const sampleThemeData: ThemeContextType = 'dark'

  return (
    <ThemeContext.Provider value={sampleThemeData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
