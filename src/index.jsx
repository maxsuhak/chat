import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { ActionCableProvider } from 'react-actioncable-provider'
import ConversationsList from './components/ConversationsList'
import { API_WS_ROOT } from './constants'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <ActionCableProvider url={API_WS_ROOT}>
      <ConversationsList />
    </ActionCableProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
