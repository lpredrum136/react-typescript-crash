import { createContext, ReactNode, useState } from 'react'

interface IThemeContextProps {
  children: ReactNode
}

type ThemeContextType = {
  theme: string
  toggleTheme: (theme: string) => void
}

// you cannot start createContext() with some default param because ThemeContextType has a function - what are you gonna set initial value for a function lol???
export const ThemeContext = createContext<ThemeContextType | null>(null) // if lazy, delete the generics

const ThemeContextProvider = ({ children }: IThemeContextProps) => {
  const defaultTheme = 'dark'

  const [theme, setTheme] = useState(defaultTheme)

  const toggleThemeFunc = (themeStr: string) => {
    setTheme(themeStr)
  }

  const themeContextData: ThemeContextType = {
    theme,
    toggleTheme: toggleThemeFunc
  }

  // const [theme, setTheme] = useState<string | null>(defaultTheme) // this is fine as well

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
