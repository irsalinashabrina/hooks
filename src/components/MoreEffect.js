import MoreEffectService from "../services/moreEffectService";
import { useEffect, useState } from "react";
import { useDeps } from "../context/depContext";

const MoreEffect=()=>{
    console.log(useDeps());
    const {moreEffectService:{doPrint}}=useDeps()
    // const {doPrint} = MoreEffectService();

    // // //1. cara yg sering digunakan
    // const [result,setResult]=useState();
    // useEffect(()=>{
    //     setResult(doPrint('1'))
    //     console.log('1');
    // },[])
    // return(
    //     <div>
    //         <h1>Print:{result}</h1>
    //     </div>
    // )

    // //useEeffect dipanggil ketika ada perubahan Id
    // //1. cara yg sering digunakan
    // const [result,setResult]=useState('');
    // const [id,setId]=useState('')
    // useEffect(()=>{
    //     setResult(doPrint(id)) // kalau di set mathrandom maka akan set setate trs jd nya re render trs
    //     // // 1 tidak rerender karna tidak terjadi perbedaan state
    //     console.log('1');
    //     // // deps mengatur useEffect dijalankan
    // },[id]) // array kosong, komponen hanya dipanggil pertama kali saja/didmount

    // // //1. dependensi gada
    // // //2. 
    // return(
    //     <>
    //         <input type='text' value={id} onChange={(e)=>{
    //             setId(e.target.value)
    //         }}/>
    //         {/* <button onClick={()=>setId('10')}>Click</button> */}
    //         <h1>Print:{result}</h1>
    //     </>
    // )

    const [result,setResult]=useState('');
    const [id,setId]=useState('0')
    useEffect(()=>{
        setResult(doPrint(id)) // kalau di set mathrandom maka akan set setate trs jd nya re render trs
        // // 1 tidak rerender karna tidak terjadi perbedaan state
        return(()=>console.log('call'))
        console.log('1');
        // // deps mengatur useEffect dijalankan
    },[id]) // array kosong, komponen hanya dipanggil pertama kali saja/didmount

    // //1. dependensi gada
    // //2. 
    return(
        <>
            {/* <input type='text' value={id} onChange={(e)=>{
                setId(e.target.value)
            }}/> */}
            <button onClick={()=>setId('10')}>Click</button>
            <h1>Print:{result}</h1>
        </>
    )
}


export default MoreEffect;