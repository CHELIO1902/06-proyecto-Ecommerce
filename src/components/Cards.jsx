import { useItemsContext } from '../context/ItemsContext'
import Pagination from '../pagination/Pagination'
import Card from './Card'

const Cards = () => {

  const context = useItemsContext()

  return (
    <div className='d-flex flex-wrap justify-content-evenly'>
       {context.loading
        ? <h1>Cargando...</h1>
        : context.currentItems.filter(item => {
          if (context.search === '') {
            return item // Si la busqueda es vacia, retorno todas las canciones
          } else if (item.product_name.toLowerCase().includes(context.search.toLowerCase())) {
            return item // Retorno la canción que si cumplen con el criterio de busqueda
          }
          return null
        }).map((item) => (
        <div className='row col-md-3'
              key={item.id}
        >
          <Card item={item} />

          <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} />
        </div>
      ))}
    </div>
  )
}

export default Cards