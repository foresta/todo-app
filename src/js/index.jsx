import React from 'react'
import { render } 'react-dom'
import { Provider } 'react-redux'
import { createStore } 'redux'
import todoApp './reducers'
import App './components/App'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
