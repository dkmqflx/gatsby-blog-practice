import { useEffect, useState } from 'react'

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
const BLOG_THEME = 'blog_theme'

type ThemeType = 'dark' | 'light'

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(
    document.body.classList.value,
  )

  // useEffect(() => {
  //   console.log('useEffect')
  //   document.body.classList.value === DARK_THEME
  //     ? setTheme(DARK_THEME)
  //     : setTheme(LIGHT_THEME)
  // }, [])

  const toggleTheme = (theme: ThemeType) => {
    switch (theme) {
      case DARK_THEME:
        localStorage.setItem(BLOG_THEME, DARK_THEME)
        setTheme(DARK_THEME)
        document.body.classList.add('dark')
        document.body.classList.remove('light')
        break
      case LIGHT_THEME:
        localStorage.setItem(BLOG_THEME, LIGHT_THEME)
        setTheme(LIGHT_THEME)
        document.body.classList.add('light')
        document.body.classList.remove('dark')
        break
      default:
        break
    }
  }

  return { theme, toggleTheme }
}

export default useTheme
