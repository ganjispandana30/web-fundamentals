//import { PureComponent } from "react";

import React,{PureComponent} from 'react';

import AddStudentButton from './Components/AddStudentButton';
import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';


class App1 extends PureComponent{
    constructor() {
        super();
        this.state = {formOpen : false};
    
       
      }
    


    render(){
        return <div className="card">
            <h2>Student Form</h2>
            <fieldset>
                {this.state.formOpen && <StudentForm/>} 
                <br/>
                
                <AddStudentButton onClick={()=>{this.setState({formOpen:!this.state.formOpen})}}/>
                <StudentForm/>
                
                </fieldset>
                <StudentList/>
                </div>
    }
}

export default App1;