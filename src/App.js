import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Listado de Todos los Productos en Venta'}/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Filtrados'}/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        </Routes>  
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
