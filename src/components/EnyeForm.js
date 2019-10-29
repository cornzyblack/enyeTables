import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import uuid from 'uuid';
import './../App.css';
import {Form, Input,Tooltip,Icon,Button,} from 'antd';
import { useDispatch } from 'react-redux';
import pushUser from "../actions/pushUser"


function EnyeForm(props){
  // parametrs fot the components
  const { getFieldDecorator } = props.form;
  const dispatch = useDispatch()
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
  
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values['key'] = uuid.v4();
        dispatch(pushUser(values));
        props.form.resetFields();

    }
    });
  };

  const checkBirthDate = (rule, value, callback) => {
    const { form } = props;
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
  return (
          <Form {...formItemLayout} onSubmit={handleSubmit}  style={{padding:"10px 50px"}}>
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
                      {validator: checkBirthDate}
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

const WrappedEnyeForm = Form.create({ name: 'login' })(EnyeForm);
export default WrappedEnyeForm;
