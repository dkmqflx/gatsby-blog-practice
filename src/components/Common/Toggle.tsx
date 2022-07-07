import React, { useState } from 'react'

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
const BLOG_THEME = 'blog_theme'

type ThemeType = 'dark' | 'light'

const Toggle = () => {
  const initialTheme = () => {
    if (typeof window !== 'undefined') {
      return document.body.classList.value
    } else {
      return window?.['__theme']
    }
  }

  const [theme, setTheme] = useState<string | null>(initialTheme())

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

  return (
    <>
      {theme === DARK_THEME ? (
        <button onClick={() => toggleTheme('light')}>To Light</button>
      ) : (
        <button onClick={() => toggleTheme('dark')}>To Dark</button>
      )}
    </>
  )
}

export default Toggle
