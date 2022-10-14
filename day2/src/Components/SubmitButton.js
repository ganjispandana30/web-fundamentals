import React, {PureComponent} from 'react';
import StudentList from './StudentList';


class SubmitButton extends PureComponent
{
   
      
    render(){
        return(
            
            <input type="submit" value="Submit" onClick={()=>{this.setState(this.state(StudentList))}} />
         
    );
    }
}
export default SubmitButton;