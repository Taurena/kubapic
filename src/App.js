import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import MyProvider from './components/context/CartContext';

function App() {
  return (
    <BrowserRouter>
    <MyProvider>
      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido'}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
    </MyProvider>
    </BrowserRouter>
  );
}

export default App;
