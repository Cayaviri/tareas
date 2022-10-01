import React, { useState } from 'react'
import Icons from './buttons/Icons'
import ItemContenedor from './container/ItemContenedor'
import Texto from './forms/Texto'
import { BiXCircle, BiEditAlt, BiCheck } from "react-icons/bi";
import '../App.css'
import Input from './forms/Input';
import SubmitButton from './buttons/SubmitButton';

export default function Items({index, id, titulo, fecha, realizado, completarTarea, eliminarTarea, editarTarea}) {
  const [irealizado, setIrealizado] = useState(realizado)
  const [edit, setEdit] = useState(false)

  const completar = index =>   {
    setIrealizado(true)
    completarTarea(index)
  }

  const eliminar = (id) => {
    eliminarTarea(id)
  }

  const editar = (id) => {
    console.log('editando...', id)
    setEdit(true)
    editarTarea(id)
  }

  const editarTerminar = (e) => {
    console.log('terminando editar')
  }

 return (
    <>
      <ItemContenedor >
        <Texto>
          {titulo}
        </Texto>
        <Texto>{realizado? `✔️ ${fecha}`: '😒'} </Texto>
        <Icons onClick={()=>completarTarea(index)}>
          <BiCheck />
        </Icons>
        <Icons onClick={() => editar(index)}>
          <BiEditAlt />
        </Icons>
        <Icons 
          onClick={()=>eliminar(index)}>
          <BiXCircle />
        </Icons>
      </ItemContenedor>
    </>
  )

}
