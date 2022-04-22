import ReactDOM from 'react-dom/client'
import './utility/input.css'
import App from './App'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);