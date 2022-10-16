import React,{PureComponent} from 'react';




class StudentList extends PureComponent{

constructor(props){
  super(props);
//  this.state={comp1fun}
 //   student: [this.firstname,this.lastname,this.email,this.phonenumber,this.address]}
}
    
    

    render(){
      
    return (
    <div>
      <table>
     
      <tr >
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Address</th>
  </tr>
      
      </table>
      {
      
    this.props.list.map((user,index)=>
    <table>
      
  <tr key={index}>
    <th>{user.firstname}</th>
    <th>{user.lastname}</th>
    <th>{user.email}</th>
    <th>{user.phonenumber}</th>
    <th>{user.address}</th>
  </tr>
  
  
    </table>)}
    </div>);}

    
}

export default StudentList;