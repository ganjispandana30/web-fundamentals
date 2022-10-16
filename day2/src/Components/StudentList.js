import React,{PureComponent} from 'react';




class StudentList extends PureComponent{

constructor(props){
  super(props);

}
    
    

    render(){
      
    return (
    <div className='table'>
      <table className='table'>
     
      <tr className='table'>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Address</th>
  </tr>
      
      </table>
      {
      
    this.props.list.map((user,index)=>
    <table >
      
  <tr key={index}>
    <td>{user.firstname}</td>
    <td>{user.lastname}</td>
    <td>{user.email}</td>
    <td>{user.phonenumber}</td>
    <td>{user.address}</td>
  </tr>
  <br/>
  
  
    </table>)}
    </div>);}

    
}

export default StudentList;