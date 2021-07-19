
import './App.css';
import FindPeople from './components/FindPeople';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserMain from './components/UserMain';
import UserView from './components/UserView';
import NavBar from './components/NavBar';
import Test from './components/Test';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/User/:userId" component ={UserView}/>  
        <Route path="/User" component={UserMain}/>
        <Route path="/Project/:ProjectId" component={FindPeople}/>
        <Route path="/Project" component={Test}/>      
        <Route path ="/" component={FindPeople}/>
      </Switch>
    </Router>
    
  );
}

export default App;
