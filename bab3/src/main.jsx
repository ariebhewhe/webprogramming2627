import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);