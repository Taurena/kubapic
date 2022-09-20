import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import MyProvider from './components/context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <MyProvider>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenido'}/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </MyProvider>
    </BrowserRouter>
  );
}

export default App;
