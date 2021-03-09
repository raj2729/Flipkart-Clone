import react from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import PrivateRoute from './components/HOC/PrivateRoute'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path='/' exact component={Home} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
