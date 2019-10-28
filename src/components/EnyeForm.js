import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import uuid from 'uuid';
import './../App.css';



import {
    Form,
    Input,
    Tooltip,
    Icon,
    Button,
  } from 'antd';
  

class EnyeForm extends React.Component {
  state = {
    key: ' ',
    firstName: ' ',
    lastName: ' ',
    age: ' ',
    birthday: ' ',
    hobby: ' ',
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values['key'] = uuid.v4();
        // console.log('Received values of form: ', values);
        // console.log('Received firstName: ', values['firstName']);
        // console.log('Received Birthday: ', values['birthday'].format('YYYY'));

        this.props.addToTable(values);

    }
    });
  };

  checkBirthDate = (rule, value, callback) => {
    const { form } = this.props;
    const inputAge = parseInt(form.getFieldValue('age'));

    const valueBirthDay = new Date(value.format('YYYY-MM-DD'));
    
    var ageDiffMilli = Date.now() - valueBirthDay.getTime();
    const ageDate = new Date(ageDiffMilli); // miliseconds from epoch
    var calculatedAge =  Math.abs(ageDate.getUTCFullYear() - 1970);

    if (form.getFieldValue('age') && inputAge !== calculatedAge) {
        alert('Your Birth Date is inconsistent with your age');
    }

    else {
    callback();
  }
  
  };

 
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };


    return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}  style={{padding:"10px 50px"}}>
            <Form.Item
            label={
                <span>
                First Name&nbsp;
                <Tooltip title="What is your first name?">
                    <Icon type="question-circle-o" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your first name!'}],
            })(<Input style={{maxWidth:"500px"}} />)}
            </Form.Item>

            <Form.Item
            label={
                <span>
                Last Name&nbsp;
                <Tooltip title="What is your last name?">
                    <Icon type="question-circle-o" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }],
            })(<Input style={{maxWidth:"500px"}}/>)}
            </Form.Item>

            <Form.Item
            label={
                <span>
                Age&nbsp;
                <Tooltip title="What is your age?">
                    <Icon type="question-circle-o" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('age', {
                rules: [
                    {pattern:/^[0-9]+$/, message: 'Please type a number'},
                    {required: true, message: 'Please input your age!'}],
            })(<Input style={{maxWidth:"500px"}}/>)}
            </Form.Item>


            <Form.Item
            label={
                <span>
                Hobby&nbsp;
                <Tooltip title="What is your Hobby?">
                    <Icon type="question-circle-o" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('hobby', {
                rules: [{ required: true, message: 'Please input your Hobby!' }],
            })(<Input style={{maxWidth:"500px"}}/>)}
            </Form.Item>


            <Form.Item label="Birthday">
            {getFieldDecorator('birthday', 
            {
                rules: [
                    {required:true, message: "This is required"},
                    {validator: this.checkBirthDate}
                ]
            }
                    )(<DatePicker />)
            }
            </Form.Item>

        
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
            </Form.Item>
        </Form>
    );
  }
}

// const mapStateToProps = 

export default EnyeForm;