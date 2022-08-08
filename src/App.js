/*
Tujuan React Context
1. membantu kita menyelesaikan masalah props drilling
Definisi Props drilling adalah pengiriman props ke nested component yang membutuhkan
dan melewati component" laen yang tidak membutuhkan props tersebut

2. Memudahkan kita mengkonsumsi data secara global
Rekomendasi data yang bisa disimpan di context adalah data yang jarang sekali dilakukan update
- Theme data (like dark or light mode)
- User data (the currently authenticated user)
- Location-specific data (like user language or locale)
 */

import {Component, useState} from "react";
import MoreEffect from "./components/MoreEffect";
import ThemeModifier from "./components/ThemeModifier";
import DummyView from "./components/DummyView";
import { HookComponent } from "./components/HookComponent";
import { DepsProvider } from "./context/depContext";
import MoreEffectService from "./services/moreEffectService";
import MyHook from "./components/MyHook/MyHook";


const App=()=>{
    // const[dark,setDark]= useState(false)
    // return(
    //     <div style={{backgroundColor:dark?'black':'white'}}>
    //     <p style={{color:dark?'white':'black'}}>Color:{dark?'black':'white'}</p>
    //     <button onClick={()=>setDark(!dark)}>
    //         set Theme {dark?'white':'black'}
    //     </button>

    //     </div>
    // )

    // return <MoreEffect/>

    // const [pageID,setPageID]=useState(0)
    // return(
    //     pageID === 0 ?<ThemeModifier onNavigate={()=>setPageID(1)}/>:
    //     <DummyView onNavigate={()=>setPageID(0)}/>
    // )

    // return <HookComponent/>

    // return(
    //     <DepsProvider services={{
    //         moreEffectService:MoreEffectService()
    //     }}>
    //         <MoreEffect/>
    //     </DepsProvider>
    // )

    return <MyHook/>
}

export default App;
