import {createRoot} from 'react-dom/client';
import App from './App.component';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';

document.body.innerHTML = '<div id="root"></div>';

const container = document.getElementById('root')!;

const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
