//import { PureComponent } from "react";

import React,{PureComponent} from 'react';
import {Button} from 'antd'


import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';


class App1 extends PureComponent{
    constructor() {
        super();
        this.state = {formOpen : false};
    
      }
    


    render(){
        return <div >
            
                {this.state.formOpen && <StudentForm/>} 
                
                <Button type="primary" style={{float: 'right'}} onClick={()=>{this.setState({formOpen:!this.state.formOpen})}}>Add Student</Button>
            
                <StudentList/>

                </div>
    }
}

export default App1;