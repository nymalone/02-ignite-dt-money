import React from 'react';
import ReactDOM from 'react-dom';
import {  createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: { // banco de dados
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      // nome do model no plural
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: new Date('2021-02-14 09:30:00')
        },
      ]
    })
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

