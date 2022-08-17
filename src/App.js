import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {VendingMachine} from './VendingMachine'
import { Pizza } from './Pizza';
import { Apple } from './Apple';
import { Chicken } from './Chicken';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<VendingMachine />}/>
            <Route path='/apple' element={<Apple />}/>
            <Route path='/chicken' element={<Chicken />}/>
            <Route path='/pizza' element={<Pizza />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
