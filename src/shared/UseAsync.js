import { useState } from "react"

const useAsync=()=>{
    const [status,setStatus]=useState('idle');
    const [value,setValue]=useState(null);
    const [error,seterror]=useState(null);


    const execute=async(asyncFn)=>{
        setStatus('loading')
        setValue(null)
        seterror(null)

        try{
            const response = await asyncFn();
            console.log('resp',response);
            setValue(response)
            setStatus('success')
        } catch(e){
            seterror(e.message)
            setStatus('failed')
        }
    }
    return {execute, status, value, error}
}

export default useAsync;