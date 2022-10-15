import React,{PureComponent} from 'react';
import { Table } from 'antd';



class StudentList extends PureComponent{

constructor(props){
  super(props);
  this.state={}
 //   student: [this.firstname,this.lastname,this.email,this.phonenumber,this.address]}
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
 
  
  
    </table>);}

    
}

export default StudentList;