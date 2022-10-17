import { Space, Table } from "antd";
import React,{ useState,useEffect } from "react";
import axios from "axios";

export default function UserList(props){
    const [users, setUsers]= useState([]);

    const getuser=(uid)=>{
        return axios.get(`/getUser?uid=${uid}`).then((data)=>data.json);
    }

    const deleteuser=(uid)=>{
        return axios.delete(`/deleteUser?uid=${uid}`).then((data)=>data.json);
    }
    useEffect(()=>{
        getuser().then((res)=>setUsers(res));
    },[users]);

    const deletedata =async(task)=>{
            deleteuser(task.id)
    };

    const columns=[{
        key: "uid",
        title:"User id",
        dataIndex: "uid"
    },
    {
        key: "fname",
        title:"First Name",
        dataIndex: "fname"
    },
    {
        key: "lname",
        title:"Last Name",
        dataIndex: "lname"
    },
    {
        key: "email",
        title:"Email",
        dataIndex: "email"
    },
    {
        key: "address",
        title:"Address",
        dataIndex: "address"
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
            props.useropen(value);
        }}>edit</a>
        </Space>
    ),
},];

return<Table columns={columns} dataSource={users} rowKey={users.id}/>
}