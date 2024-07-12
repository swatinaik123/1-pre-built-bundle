import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './routes/App.jsx'
import './index.css'
import Bags from './routes/Bags.jsx'
import Home from './routes/Home.jsx'
import { Provider } from 'react-redux'
import myntraClone from './store/index.js'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
    {path:"/bag",element:<Bags/>},
  ],
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraClone}>
    <RouterProvider router={router}/>
    </Provider>
   

   
   
   
  </React.StrictMode>,
)
