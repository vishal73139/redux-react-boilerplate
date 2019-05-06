import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';

import Navigation from './components/navigation';
import Store from './store';

import './scss/style.scss';
 

ReactDOM.render(<Provider store={Store}>
     <Navigation />
   </Provider>,
  document.getElementById('app')
);