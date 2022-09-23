import React from 'react'
import Icons from './buttons/Icons'
import ItemContenedor from './container/ItemContenedor'
import Texto from './forms/Texto'
import { BiXCircle } from "react-icons/bi";
import '../App.css'

export default function Items({id, titulo, fecha, realizado, completarTarea, eliminarTarea}) {

 return (
    <>
     <ItemContenedor >
        <Texto onClick={() => completarTarea(id)}>
        {titulo}
        </Texto>
        <Texto onClick={() => completarTarea(id)}>{realizado? `✔️ ${fecha}`: '😒'} </Texto>
        <Icons 
          onClick={()=>eliminarTarea(id)}>
          <BiXCircle />
        </Icons>
      </ItemContenedor>
    </>
  )

}
