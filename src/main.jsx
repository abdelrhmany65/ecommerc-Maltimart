import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouts from './routers/AppRouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

import store from "./redux/store";
import { Provider } from "react-redux"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover = {false}
      theme='dark'
      />
      
      <AppRouts store={store} />
    </Provider>
  </StrictMode>,
);
