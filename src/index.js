import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux-toolkit/store";
import {Provider} from 'react-redux'
=======
import App from './components/app';
import 'normalize.css';

>>>>>>> master

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


