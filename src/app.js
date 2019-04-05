import '@babel/polyfill'
import m from 'mithril'

import HelloView from './Hello.view'

const root = document.getElementById('app')

m.mount(root, HelloView)
