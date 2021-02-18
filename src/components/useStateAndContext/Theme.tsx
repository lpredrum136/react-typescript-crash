import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const Theme = () => {
  const [userTheme, setUserTheme] = useState('')

  const { theme, toggleTheme } = useContext(ThemeContext)!

  const onThemeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserTheme(event.target.value)
  }

  const onThemeSubmit = (event: MouseEvent): void => {
    toggleTheme(userTheme)
  }

  return (
    <div>
      Current theme: {theme}
      <br />
      Change theme to:
      <input
        type='text'
        name='theme'
        placeholder='Enter theme'
        value={userTheme}
        onChange={onThemeInput}
      />
      <button onClick={onThemeSubmit}>Change Theme!</button>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Theme
