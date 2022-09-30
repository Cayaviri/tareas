import React from 'react'
import { useState } from 'react'
export const authContext=React.createContext()
export default function AuthContext({children}) {
    const [user,setUser]=useState({
        logged:false,
        data:null
      })
    
    return(
        <authContext.Provider
            value={{
                user,
                setUser
            }}
        >
              {children}  
        </authContext.Provider>
    )
}