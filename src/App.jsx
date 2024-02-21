/* App */

import Navbar from "./componentes/Navbar"
import Carrito from "./componentes/Carrito"
import Filtros from "./componentes/Filtros"
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Carrito />
      <Filtros />
      <ItemListContainer greeting={`Primera Entrega React Js`}/>
      <Footer />
    </>
  )
} export default App
