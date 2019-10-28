import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import  { connect } from 'react-redux';


const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Hobbby',
      dataIndex: 'hobby',
      key: 'hobby',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    }
  ]

class EnyeTable extends Component {

    render() {
            return (<div>
                <Table dataSource={this.props.formRows} 
                columns={columns}  
                style={{padding:"50px"}}/>
            </div>)
            ;
        }
    }


export default EnyeTable;
// export default connect()(EnyeTable