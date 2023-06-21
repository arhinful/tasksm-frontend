'use client'
import useAuth from "../../../hooks/useAuth"
import {useEffect, useState} from "react";
import { useRouter } from 'next/navigation'

export default function Page(){
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const {login, isLoading, user} = useAuth({
        middleware: 'guest',
    })

    const userLogin = (event)=> {
        event.preventDefault()
        login({email, password, setErrors})
    }

    // useEffect(() => {
    //     if (router.query.reset?.length > 0 && errors.length === 0) {
    //         setStatus(atob(router.query.reset))
    //     } else {
    //         setStatus(null)
    //     }
    // },[])

    // if (isLoading || user){
    //     return <div>Loading...</div>
    // }

    return(
        <>
            <form onSubmit={userLogin}>

                <div>
                    {
                        errors.map((error, index)=>{
                            return(
                                <div key={index} className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Opps</strong> {error}
                                </div>
                            )
                        })
                    }
                </div>

                <div className="form-floating mb-3">
                    <input type="text"
                           className="form-control shadow-none"
                           id="email"
                           style={{minWidth: 350}}
                           onChange={(event)=>{
                               setEmail(event.target.value)
                           }}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control shadow-none"
                        id="password"
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <button className="btn btn-primary">Login</button>
                </div>

            </form>
        </>
    )
}
