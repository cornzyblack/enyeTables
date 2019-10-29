import React from 'react';
import Header from './components/layout/Header';
import EnyeForm from './components/EnyeForm';
import EnyeTable from './components/EnyeTable';
import { Provider } from "react-redux"
import {createStore, applyMiddleware, compose} from 'redux'; 
import combinedReducers from "./reducers"; 
import reduxThunk from 'redux-thunk'; 
import './App.css';



const baseState={};

const store = createStore(
    combinedReducers, 
    baseState, 
    // wrap up all of them in compose to combine them as an argument
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


class App extends React.Component{


    

    render () {
        

        return (
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <div className="container">
                        <div className="form">
                            <EnyeForm addToTable={this.props.onUpdateTable}/>
                        </div>
                        <div className="table">
                            <EnyeTable formRows={this.props.frows}/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }

}

export default App
