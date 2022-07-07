import { useEffect, useState } from 'react'

const DARK_THEME = 'theme-dark'
const LIGHT_THEME = 'theme-light'
const BLOG_THEME = 'blog_theme'

type ThemeType = 'theme-dark' | 'theme-light'

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>()

  useEffect(() => {
    document.body.classList.value === DARK_THEME
      ? setTheme(DARK_THEME)
      : setTheme(LIGHT_THEME)
  }, [])

  const toggleTheme = (theme: ThemeType) => {
    switch (theme) {
      case DARK_THEME:
        localStorage.setItem(BLOG_THEME, DARK_THEME)
        setTheme(DARK_THEME)
        document.body.classList.add('theme-dark')
        document.body.classList.remove('theme-light')
        break
      case LIGHT_THEME:
        localStorage.setItem(BLOG_THEME, LIGHT_THEME)
        setTheme(LIGHT_THEME)
        document.body.classList.add('theme-light')
        document.body.classList.remove('theme-dark')
        break
      default:
        break
    }
  }

  return { theme, toggleTheme }
}

export default useTheme
