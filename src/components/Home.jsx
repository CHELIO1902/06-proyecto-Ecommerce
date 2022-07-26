import { Routes, Route } from 'react-router-dom'
import { ItemsProvider } from '../context/ItemsContext'
import NavBar from '../Layouts/NavBar'
import Pagination from '../Layouts/Pagination'
import Cards from './Cards'



const Home = () => {
  return (
    <>
      <ItemsProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Cards />} />

        </Routes>
        <Pagination />
      </ItemsProvider>
    </>

  )
}

export default Home