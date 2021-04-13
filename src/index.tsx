import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs' //Declarando mirage.js
import {App} from './App';

//Inicio da Sumilação de uma api com mirage.js
createServer({
routes(){
  this.namespace='api';

  this.get('/transactions', () => {
    return [
      {
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date()
      }
    ]
  })
}
})
//Fim da Sumilação de uma api com mirage.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

