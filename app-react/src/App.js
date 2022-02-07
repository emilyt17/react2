import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div >
      <Router>
      <Menu/>
      </Router>
      <ItemListContainer />
      
    </div>
  );
}

export default App;
