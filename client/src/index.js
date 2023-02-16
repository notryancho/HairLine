// import React from 'react';
// import { createRoot } from 'react-dom/client';

// import './styles/index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root'))


// ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <BrowserRouter>
//       <App />
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



