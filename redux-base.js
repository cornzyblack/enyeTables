const redux = '';
const createStore = redux.createStore;

const initialState = {
    formRows: [
    ]
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === "ADD_FORM_TABLE") {
        return {
            formRows: [...state.formRows,
            action.value]
        }
    }
    return state;
};

// Store
const store = createStore(rootReducer);


// Dispatching Action
// key: passedRow['key'],
// firstName: passedRow['firstName'],
// lastName: passedRow['lastName'],
// age: passedRow['age'],
// birthday: passedRow['birthday'].format('YYYY/MM/DD'),
// hobby: passedRow['hobby'],

store.dispatch({type: 'ADD_FORM_TABLE', payload: {} });

// Subscription