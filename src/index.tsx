import React from 'react';
import ReactDOM from 'react-dom';
import {  createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: { // banco de dados
    transaction: Model,
  },

  routes() {
    this.namespace = 'api' // todas as chamadas que eu vou fazer, serão a partir desse endereço 3333/api/transactions por exemplo
  
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) // os dados vem por padrão em texto, mas eu envio em JSON 

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

