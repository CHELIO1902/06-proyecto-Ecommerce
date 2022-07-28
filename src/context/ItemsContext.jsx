import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios';
// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información entre diferentes niveles de componentes.

// Para usar CONTEXT necesitamos seguir una serie de pasos:

// #1 Creación del Contexto Vacio
// const SongContext = React.createContext()
export const EcommerceContext = createContext()

// #2 Creación del Proveedor del Contexto
// Es decir, maneja de donde se obtiene y como se pasa la información
function ItemsProvider (props) {
  const [items, setItems] = useState([]) // data de la API.
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(true) // Nos indica cuando los datos esten disponibles.
  const [selectedItems, setSelectedItems] = useState({}) // Nos dira que canción esta seleccionada
  const [search, setSearch] = useState('')

  const getItems = async() => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    setItems(res.data.slice(0, 12))
  }

  const nextPage = () => {
    setCurrentPage(items + 12)
    getItems()
  }

  const prevPage = () => {
    setCurrentPage(items - 12)
    getItems()
  }

  useEffect(() => {
    getItems()
    setItems(items)
    setLoading(false)
    setCurrentPage()
    nextPage()
    prevPage()
  }, [])

  // Tenemos que indicar al Provider, que datos debe proveer. Estos datos son públicos para todos los componentes
  const value = {
    items,
    selectedItems,
    setSelectedItems,
    loading,
    search,
    setSearch,
    nextPage,
    prevPage
  }

  // Siempre se llamaba value el prop del Provider con la data.
  // value es un objeto que indica que datos son globales.
  return (
    <EcommerceContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
// Brinda el acceso a la data a los componentes.

const useItemsContext = () => {
  const context = useContext(EcommerceContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumir
// para que puedan ser invocadas en nuestros componentes.
export {
  ItemsProvider,
  useItemsContext
}
