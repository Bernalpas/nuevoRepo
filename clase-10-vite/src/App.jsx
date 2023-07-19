


import Footer from './Componenetes/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from './Componenetes/Home'
import Principal from './Componenetes/Principal'
import Api from './Componenetes/Api'
import Productos from './Componenetes/Productos'
import Error from './Componenetes/Error'
import Navegador from './Componenetes/Navegador'

function App() {

  return (
    <>
    <Navegador />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/principal' element={<Principal />}></Route>
      <Route path='/api' element={<Api />}></Route>
      <Route path='/productos' element={<Productos />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
