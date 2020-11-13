import './App.css';
import Nav from './components/Nav';
import routes from './routes';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();
  return (

    <div className="App">

      { location.pathname !== "/" && 
        <Nav location={location}/>
      }
     
      {routes}
    </div>
  );
}

export default App;
