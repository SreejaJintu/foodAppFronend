import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navabar/navbar'
import Order from './pages/placeOrder/order'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'

function App() {

  return (
    <>
    <div className='App'>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Order/>}/>
        {/* <Route path='*' element={<Home/>}/> */}



      </Routes>
      </div>
    </>
  )
}

export default App



