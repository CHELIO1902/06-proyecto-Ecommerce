import { useContext } from 'react'
import { EcommerceContext } from '../context/ItemsContext'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Logout } from '../pages'

const RoutesIndex = () => {
  const { isAuth } = useContext(EcommerceContext)
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Logout' element={<Logout />} />
    </Routes>
  )
}

export default RoutesIndex