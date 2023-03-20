import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar.js';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';
//pages
import HomePage from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import NosotrosPage from './pages/NosotrosPage';
import DetailPage from  './pages/DetailPage';
import NotFoundPage from './pages/NotFound';
import CartPage from './pages/CartPage'

//context
import {CartProvider} from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/productos' element={<ProductosPage/>}/>
            <Route path='/nosotros' element={<NosotrosPage/>}/>
            <Route path='/:category' element={<CardList/>}/>
            <Route path='/productos/:id' element={<DetailPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

