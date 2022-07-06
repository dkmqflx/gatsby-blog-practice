import { useEffect, useState } from 'react'

const DARK_THEME = 'dark'
const BLOG_THEME = 'blog_theme'

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>()

  const toggleTheme = () => {
    if (theme) {
      localStorage.removeItem(BLOG_THEME)
      setTheme(null)
    } else {
      localStorage.setItem(BLOG_THEME, 'dark')
      setTheme(DARK_THEME)
    }
    document.body.classList.toggle('theme-dark')
  }
  useEffect(() => {
    if (window) {
      setTheme(localStorage.getItem(BLOG_THEME))
    }
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
