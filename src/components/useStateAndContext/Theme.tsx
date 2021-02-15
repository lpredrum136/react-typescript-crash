import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

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
    </div>
  )
}

export default Theme
