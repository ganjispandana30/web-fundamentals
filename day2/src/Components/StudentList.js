import React,{PureComponent} from 'react';
import { Table } from 'antd';



class StudentList extends PureComponent{

constructor(props){
  super(props);
}
    
    

    render(){
    return (<table>
      <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>{this.props.firstname}</td>
    <td>{this.props.lastname}</td>
    <td>{this.props.email}</td>
    <td>{this.props.phonenumber}</td>
    <td>{this.props.address}</td>
  </tr>
  
    </table>);}

    
}

export default StudentList;