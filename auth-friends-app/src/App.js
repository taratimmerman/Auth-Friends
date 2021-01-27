import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';
import Friends from './components/FriendList'
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='App'>
     <Router>
       <Navbar />
      <div className='App'>
        <Switch>
          <PrivateRoute exact path='/api/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;