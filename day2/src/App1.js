//import { PureComponent } from "react";

import React,{PureComponent} from 'react';
import {Button} from 'antd'


import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';


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


    render(){
        return <div >
            
                {this.state.formOpen && <StudentForm addstudent={this.addstudent}/>} 
                
                
                <Button type="primary" style={{float: 'right'}} onClick={()=>{this.setState({formOpen:!this.state.formOpen})}}>Add Student</Button>
            
                <StudentList list={this.state.list} addstudent={this.addstudent}/>  

                </div>
    }
}

export default App1;