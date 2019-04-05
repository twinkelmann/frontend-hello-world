import m from 'mithril'

export default {
  view: () =>
    m(
      '.container.mx-auto.p-4',
      m('h1', 'Hello World'),
      m(
        'p.simple-transition.hover:bg-purple-lighter.hover:text-purple-dark.rounded.p-4',
        'This is a Hello World application, using Prettier, Tailwind, Mithril, JSX (optional), PurgeCSS, Laravel Mix, Chai and Mocha.'
      )
    ),
}
