import {useState} from 'react'

import {Navigate} from 'react-router-dom'

const DefaultLayout = () => {
    const [userToken, setUserToken] = useState('')

    if(!userToken){
        return <Navigate to="/login"/>
    }


    return (
        <>
            <Navbar/>
        </>
    )
}

export default DefaultLayout