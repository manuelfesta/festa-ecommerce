import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
    
    
  return ( 
    <Router>           
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer /> } />  
          <Route path='/categoria/:cid' element={<ItemListContainer /> } /> 
          <Route path='/detalle/:pid' element={<ItemDetailContainer/>} />
      </Routes>
    </Router>
    

  );
}

export default App
