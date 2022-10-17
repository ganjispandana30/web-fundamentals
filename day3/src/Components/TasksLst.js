import { Space, Table } from "antd";
import React,{ useState,useEffect } from "react";

export default function TasksList(props){
    const [todos, setTodos]= useState([]);

    const gettodo=(tid)=>{
        return axios.get(`/getTodo?tid=${tid}`).then((data)=>data.json);
    }

    const deletetodo=(tid)=>{
        return axios.delete(`/deleteTodo?tid=${tid}`).then((data)=>data.json);
    }
    useEffect(()=>{
        gettodo().then((res)=>setTodos(res));
    },[todos]);

    const deletedata =async(task)=>{
            deletetodo(task.id)
    };

    const columns=[{
        key: "uid",
        title:"User id",
        dataIndex: "uid"
    },
    {
        key: "title",
        title:"Title",
        dataIndex: "title"
    },
    {
        key: "body",
        title:"Body",
        dataIndex: "body"
    },
{
    title: "Action",
    key: "action",
    render: (_, value)=>(
        <Space>
        <a onClick={(e)=>{
            e.preventDefault();
            deletedata(value);
        }}>Delete</a>

        <a onClick={(e)=>{
            e.preventDefault();
            props.taskopen(value);
        }}>edit</a>
        </Space>
    ),
},];

return<Table columns={columns} dataSource={todos} rowKey={todos.id}/>
}