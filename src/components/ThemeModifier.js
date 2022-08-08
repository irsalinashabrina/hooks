import { useEffect, useState } from "react"

const ThemeModifier =(props)=>{
    const [dark,setDark] = useState(false);
    useEffect(()=>{
        document.title = `Theme ${dark?`black`:`white`}`
    
        return()=>{
            console.log('component will unmount');

            //ketika tidak berikan apa2 efek akan selalu dipanggil
            //ketika diberikan array kosong, use effect hanya sekali diajalankan saat render pertama
            //ketiak diberi array dengan state value, maka useeffct dijalankan ketika state vaue berubahha
            
        }
    })

    return(
        <div style={{backgroundColor:dark?'black':'white'}}>
        <p style={{color:dark?'white':'black'}}>Color:{dark?'black':'white'}</p>
        <button onClick={()=>setDark(!dark)}>
            set Theme {dark?'white':'black'}
        </button>
        <button onClick={props.onNavigate}>go to dummy</button>
        </div>
    )

}

export default ThemeModifier;