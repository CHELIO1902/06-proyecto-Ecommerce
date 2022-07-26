import { Link } from 'react-router-dom'
import { useItemsContext } from '../context/ItemsContext'
import './Navbar.css'


const NavBar = () => {
  const context = useItemsContext()

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }

  return (
    
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
          <img src="./src/assets/logo.png" className='ecommerce img-fluid rounded float-start' alt="logo" />
     
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-center mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Item</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              onChange={handleSearch} 
              placeholder="Search" 
              aria-label="Search" 
              />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar


{/* <nav className='nav bg-dark'>
  <div className='container justify-content-space-around'>
    <ul className="nav nav-links">
  
      <li className='nav-item'>
        <Link to='/'>Home</Link>
      </li>

      <li className='nav-item'>
        <Link to='/items'>Items</Link>
      </li>
        
      <input type="text" className='form me-2' /> 
    </ul>

  </div>
</nav>  */}
      