import {Button} from 'antd'
import React,{PureComponent} from 'react';

class AddButton extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {formOpen : false};
      }


    render(){
        return <div >
            
            
                 
                
                <Button type="primary" style={{float: 'right'}} onClick={()=>{this.setState({formOpen:!this.state.formOpen})}}>Add Student</Button>
                
                

                </div>
    }
}

export default AddButton;