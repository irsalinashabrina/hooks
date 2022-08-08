import useMyHook from "./UseMyHook"

const MyHook = () => {
    const {result, status, add, min} = useMyHook()
    const ButtonGroup = () => (
        <>
            <button onClick={add}> + </button>
            <button onClick={min}> - </button>
        </>
    )
    return (
       <>
            {(status === 'idle' || status === 'failed') && <ButtonGroup/>}
            {status === 'loading' && <div>LOADING</div>}
            {status === 'success' && <div>
                result : {result}
                <ButtonGroup/>
            </div>}
       </>
    )
}

export default MyHook;


// import useMyHook from "./UseMyHook";

// const MyHook = props=>{
//     const {counter,add,min}=useMyHook()
//     return(
//         <div>
//             result:{counter}
//             <button onClick={add}>+</button>
//             <button onClick={min}>-</button>
//         </div>
//     )
// }

// export default MyHook;

