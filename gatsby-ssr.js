const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) =>
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `(function () {
        try {
          const blogTheme =
            localStorage.getItem('blog_theme') ||
            window.matchMedia('(prefers-color-scheme: dark)').matches
          if (blogTheme) document.body.classList.add('theme-dark')
        } catch (error) {}
      })()`,
      }}
    />,
  ])
