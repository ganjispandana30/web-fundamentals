
import React,{PureComponent} from 'react';
import {Button} from 'antd'


import {StudentForm,StudentList} from './Components/index';



class App1 extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {formOpen : false,list:[]};
    
      }
    
addstudent=(user)=>{
   let copyuser=Object.assign([],this.state.list);
    copyuser.push(user)
    this.setState({list:copyuser});  
} 

buttonhandler =()=>{
    this.setState({formOpen:!this.state.formOpen});
}


    render(){
        return <div >
                <Button type="primary" style={{float: 'right'}} onClick={this.buttonhandler}>Add Student</Button>
                {this.state.formOpen && <StudentForm addstudent={this.addstudent}/>}
                {this.state.formOpen || <StudentList list={this.state.list} addstudent={this.addstudent}/> }
                 
                
       
                
                

                </div>
    }
}

export default App1;