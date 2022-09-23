import React, { useEffect, useState } from 'react';
import SubmitButton from '../components/buttons/SubmitButton';
import FormTarea from '../components/forms/FormTarea';
import Input from '../components/forms/Input';
import Tarea from '../components/forms/Tarea';
import Items from '../components/Items';
import Title from '../components/header/Title';
import Navbar from '../components/Navbar';
import '../App.css';


export default function Tareas({listaTareas}) {
 
  const [listatareas, setListaTareas] = useState([])

  
  useEffect(() => {
    setListaTareas(listaTareas)  
  },[])
  

  const completarTarea = (id) => {
    console.log(id, ' completando')
    const tempTareas = listaTareas;
    console.log(tempTareas[id-1]);
    tempTareas[id-1].realizado=true;
    tempTareas[id-1].fecha=new Date().toLocaleDateString('en-US');
    setListaTareas(tempTareas);
    console.log('tarea completada...') 
  }

  const eliminarTarea = (id) =>{
    console.log('eliminado', id)
    const tempTareas = listaTareas.filter(tarea => tarea.id !== id);
    setListaTareas(tempTareas);
    console.log('eliminado')
  }

  const agregarTarea = (e) =>{
    e.preventDefault();
    const nuevotitulo = document.getElementById('titulo').value;
    if (nuevotitulo===''){
      alert('Debe registrar una tarea')
      return;
    }
    
    const nuevaTarea = {
      id:listatareas.length,
      titulo:nuevotitulo,
      fecha:'',
      realizado: false
    }
    let listaNueva=[nuevaTarea, ...listaTareas]
    setListaTareas(listaNueva)
    console.log('agregado nueva tarea...')
   
  }

  
  const lis = listatareas.map((li, index) => {
    return(
      <Items key={index}
        id={li.id}
        titulo={li.titulo}
        fecha={li.fecha}
        realizado={li.realizado}
        completarTarea={() => completarTarea(li.id)}
        eliminarTarea={() => eliminarTarea(li.id)}
        >
      </Items>
    )  
  })

  return (
    
    <div className="contenedor-tareas">
      <Navbar />
      <Title>Tareas</Title>
        <Tarea>      
            <FormTarea>
              <form onSubmit={agregarTarea}>
              <Input id='titulo'></Input>
              <SubmitButton>Registrar</SubmitButton>
              </form>
            </FormTarea>
            {lis}
        </Tarea>
    </div>
  )
}
