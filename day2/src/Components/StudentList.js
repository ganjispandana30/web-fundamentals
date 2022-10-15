import React,{PureComponent} from 'react';
import { Table } from 'antd';



class StudentList extends PureComponent{

constructor(props){
  super(props);
  this.state={
    student: [this.firstname,this.lastname,this.email,this.phonenumber,this.address]}
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
    <td>{this.state.student.firstname}</td>
    <td>{this.state.student.lastname}</td>
    <td>{this.state.student.email}</td>
    <td>{this.state.student.phonenumber}</td>
    <td>{this.state.student.address}</td>
  </tr>
  
    </table>);}

    
}

export default StudentList;