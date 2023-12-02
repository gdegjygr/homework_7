import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/memoFunction/App';
import UseCallBack from './components/CallbackFunction/FuncUseCallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UseCallBack /> 
  </React.StrictMode>
);

