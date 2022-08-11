import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting='Hola'/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
