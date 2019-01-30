const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')

const public = 'public'

mix
  .setPublicPath(public)
  .js('src/app.js', public)
  .extract()
  .sass('src/app.scss', public)

  .copy('res', public + '/res')
  .copy('src/index.html', public)

  .disableNotifications()
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.js')],
  })
  .sourceMaps(false) // enable source maps but not in production

// Only run PurgeCSS during production builds for faster development builds
// and so you still have the full set of utilities available during
// development.
if (mix.inProduction()) {
  mix.purgeCss({ folders: ['src'] })
}
