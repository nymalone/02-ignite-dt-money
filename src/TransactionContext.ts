import { createContext } from 'react'

 // quando eu crio um contexto eu consigo acessar esse contexto de qualquer componente da aplicação,
 // mas para isso eu preciso colocar por volta o Provider -> App.tsx
export const TransactionsContext = createContext([]);

