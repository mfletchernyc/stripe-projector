import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/store'

import Projector from './Projector'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Projector />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
