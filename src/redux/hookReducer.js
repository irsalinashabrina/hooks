const hookInitialState={
    number:'0'
}


export default function hookReducer(state=hookInitialState,action) {
    switch (action.type) {
        case 'update':
            return {number:action.payload.num}
    
        default:
            return state;
    }
}
