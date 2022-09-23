import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
//import Navbar from './components/Navbar';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Tareas from './pages/Tareas';

const lt = [{id:1, titulo:'Tarea 1', fecha:'01/01/2022', realizado:true},
               {id:2, titulo:'Tarea 2', fecha:'', realizado:false},
               {id:3, titulo:'Tarea 3', fecha:'', realizado:false}]

function App() {
  return (
    <div className='contenedor-menu'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registro' element={<Registro />}></Route>
        <Route path='/tarea' element={<Tareas listaTareas={lt}/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
