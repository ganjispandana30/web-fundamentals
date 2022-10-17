import { Button } from 'antd';
import React, { PureComponent ,useState} from 'react';
import "./Components/index"


export default function App2(){
    const [formOpenTodo,setformOpenTodo]=useState(false);
    const [taskdata,setTaskData]=useState({});
    const [formOpenUser,setformOpenUser]=useState(false);
    const [userdata,setUserData]=useState({});
    
    const taskclose=()=>{setformOpenTodo(false);setTaskData({});}
    const taskopen=(e)=>{setformOpenTodo(true);setTaskData(e);}
    const userclose=()=>{setformOpenUser(false);setUserData({});}
    const useropen=(e)=>{setformOpenUser(true);setUserData(e);}
    
   return (<div>
    <Button onClick={()=>setformOpenTodo(true)}>Create Task</Button>
    <Tasks formOpenTodo={formOpenTodo}  taskclose={taskclose} todo={taskdata}/>
    <TasksList taskopen={taskopen}/>
    <br/>
    <Button onClick={()=>setformOpenUser(true)}>Create User</Button>
    <User formOpenUser={formOpenUser}  userclose={userclose} user={userdata}/>
    <UserList useropen={useropen}/>
    </div>);
}

