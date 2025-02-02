/* @refresh reload */
import { render } from 'solid-js/web'
import App from './app.tsx'
import { NavProvider } from './context/NavContext.tsx'

const root = document.getElementById('root')

render(() => (
  <NavProvider>
    <App />
  </NavProvider>
), root!)
