import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Movies from "./Movies";
import Singlemovie from "./Singlemovie";
import Error from "./Error";
import Form from './Form';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home />} />
<Route path='/movie' element={<Movies />} />
<Route path='/movie/:id' element={<Singlemovie />} />
<Route path='*' element={<Error />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
