import React from 'react';
import Header from './components/layout/Header';
import EnyeForm from './components/EnyeForm';
// import uuid from 'uuid';

class App extends React.Component{
    state = [
        {
            firstName: null,
            lastName: null,
            birthDay: null,
            age: null,
            hobby: null
        }
    ]

    render () {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <EnyeForm />
                </div>
            </div>
        );
    }

}

export default App;
