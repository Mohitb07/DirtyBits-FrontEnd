import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Loginbutton() {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    console.log(loginWithRedirect)
    console.log('button auth ' + isAuthenticated)
    if(isLoading){
        return <span>Loading...</span>
    }
    return (
        !isAuthenticated && (
        <button className='btn btn-default btn-success' onClick={()=>loginWithRedirect()}>
            Login
        </button>
        )
    )
}

export default Loginbutton
