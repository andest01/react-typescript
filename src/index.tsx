import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import App from './App'
import './index.css'
import createRoutes from './Routes'
import store from './Store.redux'
const routes = createRoutes()

ReactDOM.render(
  <App
    history={browserHistory}
    store={store}
    routes={routes}
  />,
  document.getElementById('root') as HTMLElement
)
