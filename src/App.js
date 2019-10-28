import React from 'react';
import Header from './components/layout/Header';
import EnyeForm from './components/EnyeForm';
import EnyeTable from './components/EnyeTable';
import { connect } from 'react-redux';

import {Form} from 'antd'


class App extends React.Component{
    // state = {
    //     formRows: [
    //     ]
    // }
    
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
                        <WrappedEnyeForm addToTable={this.props.onUpdateTable}/>
                    </div>
                    <div className="table">
                        <EnyeTable formRows={this.props.frows}/>
                    </div>
                </div>
            </div>

            
        );
    }

}

const mapStateToProps = state => {
    return {
        frows: state.formRows
    };
};

const mapDispatchToProps = (dispatch, newRow) => {
    return {
        onUpdateTable: (newRow) => dispatch({type: "ADD_FORM_TABLE", payload:newRow})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
