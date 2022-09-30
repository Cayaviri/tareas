import React, { useState } from 'react'
import Icons from './buttons/Icons'
import ItemContenedor from './container/ItemContenedor'
import Texto from './forms/Texto'
import { BiXCircle, BiEditAlt, BiCheck } from "react-icons/bi";
import '../App.css'

export default function Items({index, id, titulo, fecha, realizado, completarTarea, eliminarTarea}) {
  const [irealizado, setIrealizado] = useState(realizado)

  const completar = index =>   {
    setIrealizado(true)
    completarTarea(index)
  }

  const eliminar = (id) => {
    eliminarTarea(id)
  }

  const editar = (id) => {
    console.log('editando...', id)
  }

 return (
    <>
     <ItemContenedor >
        <Texto>
        {titulo}
        </Texto>
        <Texto>{realizado? `✔️ ${fecha}`: '😒'} </Texto>
        <Icons onClick={()=>completar(index)}>
          <BiCheck />
        </Icons>
        <Icons onClick={() => editar(id)}>
          <BiEditAlt />
        </Icons>
        <Icons 
          onClick={()=>eliminar(id)}>
          <BiXCircle />
        </Icons>
      </ItemContenedor>
    </>
  )

}
