import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; //import router
// import './index.css';
// import './Home.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//add this
  // <Router>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </Router>

  <React.StrictMode>
    <Router>
      <App />
    </Router>
</React.StrictMode>

);

