const ACTION_TYPE="PUSH_USER";


const defaultState=[];

const addUserReducer=(state=defaultState,action)=>{
    
    switch(action.type){
        
        case ACTION_TYPE:
            console.log(action.payload)
            return [...state,action.payload]    
        default:
            return state
    }
}

export default addUserReducer; 