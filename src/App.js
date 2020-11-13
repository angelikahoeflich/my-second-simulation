import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Auth/>
     <Dashboard/>
     <Form/>
     <Post/>

    </div>
  );
}

export default App;
