import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import { Routes,Route } from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/deleteProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/addProduct/' element={<AddProduct/>}/>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
        <Route path='/deleteProduct/:id' element={<DeleteProduct/>}/>
      </Routes>
      
     </div>
  );
}

export default App;
