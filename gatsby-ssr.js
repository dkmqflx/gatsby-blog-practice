// const React = require('react')

export const onRenderBody = ({ setPreBodyComponents }) =>
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `(() => {
        try {
          const blogTheme =
            localStorage.getItem('blog_theme') 

          const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

          if (blogTheme === 'dark' || prefersColorScheme) {
            document.body.classList.add('theme-dark')
          }
          else{
            document.body.classList.add('theme-light')
          }

        } catch (error) {}
      })()`,
      }}
    />,
  ])
