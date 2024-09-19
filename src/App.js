import React from 'react'

import About from './About/About'
import Layout from './Layout'
import Contact from './ContactUs/Contact'
import Notfound from './Notfound/Notfound'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Portfolio from './Portfolio/Portfolio'
import Start from './Start/Start'

export default function App() {

  const routes=createHashRouter([
    {path:'',element:<Layout></Layout>,children:[
      {index:true,element:<Start></Start>},
      {path:'about',element:<About></About>},
      {path:'portfolio',element:<Portfolio></Portfolio>},
      {path:'contact',element:<Contact></Contact>},
      {path:'*',element:<Notfound></Notfound>}
  
    ]}
  ])
  
  return (
    <div >
    <RouterProvider router={routes}/>
   </div>
  )
}
