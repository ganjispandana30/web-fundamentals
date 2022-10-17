import React,{useState,useEffect} from "react";
import Modal from "antd/lib/modal/Modal";
import axios from "axios";

const Tasks = (props) => {
  const [uid, setUid]=useState(props.todo.uid);
  const [title, setTitle]=useState(props.todo.title);
  const [body,setBody]=useState(props.todo.body);
  const [todo, setTodo] = useState({});
  

  useEffect(()=>{
    setUid(props.todo.uid);
    setTitle(props.todo.title);
    setBody(props.todo.body);
  },[props.todo])

const createtodo=(todo)=>{
  return axios.post("/postTodo",todo).then((data)=>data.json);
}

const edittodo=(tid,todo)=>{
  return axios.put(`/editTodo/todo?tid=${tid}`,todo).then((data)=>data.json);
}

  const handleSubmit=async (e)=> {
    e.preventDefault();

    const newtodo = {
      uid,
      title,
      body
    };
    setTodo(newtodo);
    todo['uid']=parseInt(newtodo.uid);
    if(todo.contains(uid)){
      await edittodo(props.todo.uid,newtodo);
    }
    else{
      
      await createtodo(newtodo);
    }
   
  };

 

  return (
    <Modal open={props.formOpenTodo}
    title = "Create/Edit Task"
    onCancel={props.taskclose}
    destroyOnClose={true}>

      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label for="uid">User id</label>
        <input type="text"
        onChange={(event)=>{setUid(event.target.value)}} value={uid}></input>

        <label for="title">Title</label>
        <input type="text"
        onChange={(event)=>{setTitle(event.target.value)}} value={title}></input>

        <label for="body">Body</label>
        <input type="text"
        onChange={(event)=>{setBody(event.target.value)}} value={body}></input>
        <input type="submit"></input>
        </form>
        </Modal>
        
  );
};

export default Tasks;