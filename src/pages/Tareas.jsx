import React, { useEffect, useState } from 'react';
import SubmitButton from '../components/buttons/SubmitButton';
import FormTarea from '../components/forms/FormTarea';
import Input from '../components/forms/Input';
import Tarea from '../components/forms/Tarea';
import Items from '../components/Items';
import Title from '../components/header/Title';
import Navbar from '../components/Navbar';
import '../App.css';
import {useLocalStorage} from '../useLocalStorage'


export default function Tareas() {
 
  const [listatareas, setListaTareas] = useLocalStorage('tareas','')
  
  /*useState(
    JSON.parse(window.localStorage.getItem('tareas'))
  )

  
  const setLocalStorage = (value) =>{
    try {
      setListaTareas(value);
      window.localStorage.setItem('tareas', JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }
  

  useEffect(() => {
    setLocalStorage(listatareas)  
  })
  */

  const completarTarea = (id) => {
    console.log(id, ' completando')
    const tempTareas = listatareas;
    console.log(tempTareas[id]);
    tempTareas[id].realizado=true;
    tempTareas[id].fecha=new Date().toLocaleDateString('en-US');
    setListaTareas(tempTareas);
    //console.log('tarea completada...') 
  }

  const eliminarTarea = (index) =>{
    console.log('eliminado', index)
    //const tempTareas = listatareas.filter(tarea => tarea.id !== id);
    const tempTareas = listatareas;
    tempTareas.splice(index, 1);
    setListaTareas(tempTareas);
    return
  }

  const agregarTarea = (e) =>{
    //e.preventDefault();
    const nuevotitulo = document.getElementById('titulo').value;
    if (nuevotitulo===''){
      alert('Debe registrar una tarea')
      return;
    }
    
    const nuevaTarea = {
      id:listatareas.length+1,
      titulo:nuevotitulo,
      fecha:'',
      realizado: false
    }
    let listaNueva=listatareas;
    listaNueva.push(nuevaTarea);
    setListaTareas(listaNueva)
    console.log('agregado nueva tarea...')
   
  }

  
  const lis = listatareas.map((li, index) => {
    return(
      <Items key={index}
        index={index}
        id={li.id}
        titulo={li.titulo}
        fecha={li.fecha}
        realizado={li.realizado}
        completarTarea={() => completarTarea(index)}
        eliminarTarea={() => eliminarTarea(index)}
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
            {
            listatareas.map((li, index) => {
            return(
              <Items key={index}
                index={index}
                id={li.id}
                titulo={li.titulo}
                fecha={li.fecha}
                realizado={li.realizado}
                completarTarea={()=> completarTarea(index)}
                eliminarTarea={()=>eliminarTarea(index)}
                >
              </Items>)
            })
            }
        </Tarea>
    </div>
  )
}
