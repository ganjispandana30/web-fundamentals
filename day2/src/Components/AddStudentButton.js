import React, {PureComponent} from 'react';
import {Button} from 'antd'
import StudentForm from './StudentForm';

class AddStudentButton extends PureComponent
{
    render(){
        return(<Button type="primary" style={{float: 'right'}} onClick={()=>{this.setState(this.state(StudentForm))}}>Add Student
        
      </Button>
    );
    }
}
export default AddStudentButton;