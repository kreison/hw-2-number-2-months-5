export const reducer = (state={addten: 0}, action)=>{
    switch(action.type){
        case 'ADDTEN':
            return {...state, addten: action.payload + 10}
        default:
            return state
    }
}
export const ADDTENACTION = (payload)=>({type: 'ADDTEN', payload: payload});
