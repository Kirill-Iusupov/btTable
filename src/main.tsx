import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'jotai'
// import { store } from './state/index.ts'

import { Provider } from 'react-redux'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store ={store}>
    <App />
  </Provider>,
)
