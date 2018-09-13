import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
