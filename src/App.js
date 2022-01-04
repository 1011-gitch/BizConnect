import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function App() {
  return (
   <Router>
      {/* <Link to="/new">New</Link> */}
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
   </Router>
  );
}

export default App;
