import { useState } from 'react'

const DARK_THEME = 'dark'
const BLOG_THEME = 'blog_theme'

const useTheme = () => {
  const initialTheme = localStorage.getItem(BLOG_THEME)

  const [theme, setTheme] = useState(initialTheme)

  const toggleTheme = () => {
    console.log({ theme })

    if (theme) {
      localStorage.removeItem(BLOG_THEME)
      setTheme(null)
    } else {
      localStorage.setItem(BLOG_THEME, 'dark')
      setTheme(DARK_THEME)
    }
    document.body.classList.toggle('theme-dark')
  }

  return { theme, toggleTheme }
}

export default useTheme
