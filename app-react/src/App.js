import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import BotasAltas from './images/Botasaltas.jpg'

function App() {
  return (
    <div >
      <Router>
      <Menu/>
      </Router>
      <ItemListContainer imgSrc={BotasAltas} />
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
