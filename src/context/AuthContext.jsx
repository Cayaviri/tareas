import React, { createContext }  from 'react'
import { useState } from 'react'

export const AuthContext= createContext()

export default function AuthProvider({children}) {
    const [user,setUser]=useState({
        logged:false,
        data:null
      })
    
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser
            }}
        >
              {children}  
        </AuthContext.Provider>
    )
}