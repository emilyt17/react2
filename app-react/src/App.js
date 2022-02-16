import './App.css';
import {BrowserRouter, Routes, Switch,Route} from 'react-router-dom';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div >
      <header> 
        
          
         <Menu/>
        
      </header>
      
      <main>
      <Routes>
      <Route 
      path ="/" 
      element ={<ItemListContainer />}
      />
      
      </Routes>
      <ItemDetailContainer/>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
