import { Routes, Route } from 'react-router-dom'
import { ItemsProvider } from '../context/ItemsContext'
import NavBar from '../Layouts/NavBar'
import Cards from './Cards'



const Home = () => {
  return (
    <>
      <ItemsProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Cards />} />

        </Routes>
      </ItemsProvider>
    </>

  )
}

export default Home