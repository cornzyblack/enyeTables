import React, {Component} from 'react';

class EnyeForm extends Component {
    state = [
        {
            firstName: 'Eniwoke',
            lastName: 'Cornelius',
            birthDay: '1999-01-01',
            age: '19',
            hobby: 'swimming'
        }
    ]


    onChangeFirstName = (e) => this.setState( { [e.target.firstName]: e.target.value });
    onChangeLastName = (e) => this.setState( { [e.target.lastName]: e.target.value });
    onChangeBirthDay = (e) => this.setState( { [e.target.birthDay]: e.target.value });
    onChangeAge = (e) => this.setState( { [e.target.age]: e.target.value });
    onChangeHobby = (e) => this.setState( { [e.target.hobby]: e.target.value });
    
    onSubmit = (e) => {
    // Prevent default submit from taking place
    // Instead Pass this up to the Todo 
        e.preventDefault();
        this.props.addTodo(this.state.firstName);
        this.props.addTodo(this.state.lastName);
        this.props.addTodo(this.state.birthDay);
        this.props.addTodo(this.state.age);
        this.props.addTodo(this.state.hobby);

        // this.setState( { title: ''});
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="firstName"
                    placeholder="Enebeli" 
                    style={{ flex: '10', padding:'5px'}}
                    value={this.state.title}
                    onChange={this.onChangeFirstName}
                />
                
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Ciroma" 
                    style={{ flex: '10', padding:'5px'}}
                    value={this.state.title}
                    onChange={this.onChangeLastName}
                />

                <input 
                    type="text"
                    name="birthDay"
                    placeholder="1999-01-01" 
                    style={{ flex: '10', padding:'5px'}}
                    value={this.state.title}
                    onChange={this.onChangeBirthDay}
                />

                <input 
                    type="text"
                    name="age"
                    placeholder="1000 Years" 
                    style={{ flex: '10', padding:'5px'}}
                    value={this.state.title}
                    onChange={this.onChangeAge}
                />

                <input 
                    type="text"
                    name="hobby"
                    placeholder="Swimming" 
                    style={{ flex: '10', padding:'5px'}}
                    value={this.state.title}
                    onChange={this.onChangeHobby}
                />

                <input 
                    type='submit' 
                    value="Submit" 
                    className="btn"
                    style={{ flex:'1' }}
                />
            </form>
        )
    }
}



export default EnyeForm;