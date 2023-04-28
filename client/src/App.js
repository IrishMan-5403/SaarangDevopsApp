import './App.css';
import {Routes,  Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Table from './pages/Table';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home  />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/table/:userId" element={<Table/>} />
    </Routes>
  );
}

export default App;
