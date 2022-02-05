import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import BotasAltas from './images/Botasaltas.jpg'
import BotasAgua from './images/Botasagua.jpg'
function App() {
  return (
    <div >
      <Router>
      <Menu/>
      </Router>
      <ItemListContainer img={BotasAltas}  titles="Botas Altas - SUSY" description="Botas de cuero - Temaporada Otoño Invierno." price="$250" />
      <ItemListContainer img={BotasAgua} titles="Botas Agua - CARL " description="Botas de textil - Temaporada Otoño Invierno." price="$200" />
      
    </div>
  );
}

export default App;
