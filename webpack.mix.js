const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')

const public = 'public'

mix
  .setPublicPath(public)
  .js('src/app.js', public)
  .extract()
  .sass('src/app.scss', public)

  .copy('res', public)
  .copy('src/index.html', public)

  .disableNotifications()
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.js')],
  })
  .sourceMaps(false) // enable source maps but not in production
  .purgeCss({
    extensions: ['html', 'js'],
    folders: ['src'],
  })
