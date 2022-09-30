import React, { useState } from 'react'
import Icons from './buttons/Icons'
import ItemContenedor from './container/ItemContenedor'
import Texto from './forms/Texto'
import { BiXCircle } from "react-icons/bi";
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

 return (
    <>
     <ItemContenedor >
        <Texto onClick={()=>completar(index)}>
        {titulo}
        </Texto>
        <Texto onClick={() => completar(index)}>{realizado? `✔️ ${fecha}`: '😒'} </Texto>
        <Icons 
          onClick={()=>eliminar(id)}>
          <BiXCircle />
        </Icons>
      </ItemContenedor>
    </>
  )

}
