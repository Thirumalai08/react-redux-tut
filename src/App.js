//import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IcecreamContainer'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
