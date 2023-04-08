import { createRoot } from 'react-dom/client';
import App from './App.component';

document.body.innerHTML = '<div id="root"></div>';

const container = document.getElementById('root')!;

const root = createRoot(container);
root.render(<App />);
