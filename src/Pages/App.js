
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddIcecreamContainer from '../components/AddIcecreamContainer';
import AddNewCake from '../components/AddNewCake';
import Home from './Home';
import store from '../redux/store';

function App() {
  return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addcake" component={AddNewCake} />
          <Route path="/addIce" component={AddIcecreamContainer} />
        </Switch>
      </Provider>
  );
}

export default App;
