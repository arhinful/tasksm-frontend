import useSWR from "swr"

import axios from "../lib/axios";
import { useRouter } from 'next/navigation';
import {useEffect, useState} from "react";

export default function useAuth({middleware}={}){
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if (user || error){
            setIsLoading(false)
        }
        if (middleware === 'guest' && user) router.push('/tasks')
        if (middleware === 'auth' && !user) logout()
    }, [])

    const {data: user, error, mutate} = useSWR(
        '/user',
        ()=> axios.get('/api/v1/user').then(response => response.data.data)
    )

    const csrf = ()=> axios.get('/sanctum/csrf-cookie')

    const login = async ({setErrors, ...props})=>{
        setErrors([])
        await csrf()
        axios.post('/api/v1/login', props).then(()=> {
            // mutate() && router.push('/tasks')
            router.push('/tasks')
        }).catch((error)=>{
            console.log(error)
            // if (error.response.status !== 422) throw error
            setErrors(Object.values(error.response.data.errors).flat())
        })
    }

    const logout = async ()=>{
        await axios.post('/api/v1/logout')
        mutate(null)
        router.push('/auth/login')
    }

    return{
        user,
        csrf,
        login,
        logout,
        isLoading,
    }
}
