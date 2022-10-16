import React,{PureComponent} from 'react';


class StudentForm extends PureComponent{
  constructor(props)
  { super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      phonenumber:'',
      address:''
    }
   }

    firsthandler = (event) => {
      this.setState({
          firstname: event.target.value
      })}
    lasthandler = (event) => {
        this.setState({
            lastname: event.target.value
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
    Submithandler=(event) =>{
      event.preventDefault();
     
    let temp=
    {firstname:this.state.firstname,
    lastname:this.state.lastname,
  email:this.state.email,
phonenumber:this.state.phonenumber,
address:this.state.address}

      this.props.addstudent(temp);
    }
   
    render(){
    return (   
    <div><h2>Student Form</h2>
    
    <form onSubmit={this.Submithandler}>
        
        <label>
          First Name:
          <input type="text" placeholder='Enter your First Name' value= {this.props.firstname} onChange={this.firsthandler} />
        </label>
       
        <br/>
      
        <label>
          Last Name:
          <input type="text" placeholder='Enter your Last name' value= {this.props.lastname} onChange={this.lasthandler} />
        </label>
        <br/>
        
        <label>
          Email:
          <input type="text" placeholder='Enter your Email'  value= {this.props.email} onChange={this.emailhandler}/>
        </label>
        
        <br/>
      
        <label>
          Phone number:
          <input type="text" placeholder='Enter your Phone number' value= {this.props.phonenumber} onChange={this.phonehandler}/>
        </label>
        <br/>
        
        <label>
          Address:
          <input type="text" placeholder='Enter your Address' value= {this.props.address} onChange={this.addresshandler}/>
        </label>
     <input type="submit" />
        
      </form>
      </div>
      
      );

    }
}

export default StudentForm;
