import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Main from './components/Main'
import Admin from './components/admin'
import Products from './components/products'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
       <Route path='/' element={<Login/>}> </Route>
      <Route path='/s' element={<Signup></Signup>}> </Route>
      <Route path='/a' element={<Main data={<Admin></Admin>}/>}> </Route>
      <Route path='/p' element={<Main data={<Products></Products>}/>}/> 

     </Routes>
    </>
  )
}

export default App
