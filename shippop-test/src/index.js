import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route} from 'react-router-dom';
import DetailPage from './components/BookDetails';
ReactDOM.render(
  <BrowserRouter>
  <Route component={App} exact path='/'/>
  <Route component={DetailPage}  path='/bookDetails'/>
 
</BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
