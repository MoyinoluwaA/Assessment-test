import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Cart from './components/cart'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
