const initialState = {
    formRows: [
    ]
};

const reducer = (state = initialState, action) => {
    if(action.type === "ADD_FORM_TABLE") {
        console.log(action);
        return {
            formRows: [...state.formRows,
               action.payload
            ]  
    }
}
    return state;
};

export default reducer;