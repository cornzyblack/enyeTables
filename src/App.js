import React from 'react';
import Header from './components/layout/Header';
import EnyeForm from './components/EnyeForm';
import EnyeTable from './components/EnyeTable';


import {Form} from 'antd'


class App extends React.Component{
    state = {
        formRows: [
        ]
    }
    
    // Add row to Tabke function
    addToTable = (passedRow) => {
        const newFormRow = {
          key: passedRow['key'],
          firstName: passedRow['firstName'],
          lastName: passedRow['lastName'],
          age: passedRow['age'],
          birthday: passedRow['birthday'].format('YYYY/MM/DD'),
          hobby: passedRow['hobby'],
        }
        this.setState({ formRows: [...this.state.formRows, newFormRow] });
      }
    

    render () {
        const WrappedEnyeForm = Form.create({ name: 'register' })(EnyeForm);

        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="form">
                        <WrappedEnyeForm addToTable={this.addToTable}/>
                    </div>
                    <div className="table">
                        <EnyeTable formRows={this.state.formRows}/>
                    </div>
                </div>
                </div>

            
        );
    }

}

export default App;
