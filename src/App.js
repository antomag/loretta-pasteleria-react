import './App.css';
import NavBar from './components/NavBar/NavBar.js';

//pages
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import NosotrosPage from './pages/NosotrosPage';
import DetailPage from  './pages/DetailPage';
import NotFoundPage from './pages/NotFound';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/> {/* ruta para logo  */} 
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productos' element={<ProductosPage/>}/>
          <Route path='/nosotros' element={<NosotrosPage/>}/>
          <Route path='/:category/' element={<CardList/>}/>
          <Route path='/productos/:id' element={<DetailPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

