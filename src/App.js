import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Filler from './components/filler';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Registration' element={<Filler/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
