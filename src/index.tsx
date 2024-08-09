import {createRoot} from 'react-dom/client'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { setupStore } from './store';

const store = setupStore()

const root = document.getElementById('root')

if (!root) {
    throw new Error('Root element not found')
}

const container = createRoot(root)

container.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)