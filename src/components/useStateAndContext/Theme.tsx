import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!
  return <div>{theme}</div>
}

export default Theme
