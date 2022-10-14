import React,{PureComponent} from 'react';

class StudentForm extends PureComponent{
  constructor()
  { super();
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      phonenumber:'',
      address:''}}

    firsthandler = (event) => {
      this.setState({
          firstName: event.target.value
      })}
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })}
    emailhandler = (event) => {
          this.setState({
              email: event.target.value
          })}
    phonehandler = (event) => {
            this.setState({
                phonenumber: event.target.value
            })}
    addresshandler = (event) => {
              this.setState({
                  address: event.target.value
              })}

    render(){
    return (   <form>
        
        <label>
          First Name:
          <input type="text" placeholder='Enter your First Name' value= {this.state.firstName} onChange={this.firsthandler} />
        </label>
       
        <br/>
      
        <label>
          Last Name:
          <input type="text" placeholder='Enter your Last name' value= {this.state.lastName} onChange={this.lasthandler} />
        </label>
        <br/>
        
        <label>
          Email:
          <input type="email" placeholder='Enter your Email'  value= {this.state.email} onChange={this.emailhandler}/>
        </label>
        
        <br/>
      
        <label>
          Phone number:
          <input type="text" placeholder='Enter your Phone number' value= {this.state.phonenumber} onChange={this.phonehandler}/>
        </label>

        <br/>
        
        <label>
          Address:
          <input type="text" placeholder='Enter your Address' value= {this.state.address} onChange={this.addresshandler}/>
        </label>
      <input type="submit" onClick={()=>{}}/>
        
      </form>
      );

    }
}

export default StudentForm;