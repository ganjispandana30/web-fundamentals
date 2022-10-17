import React,{useState,useEffect} from "react";
import Modal from "antd/lib/modal/Modal";
import axios from "axios";

const User = (props) => {
  const [uid, setUid]=useState(props.user.uid);
  const [fname, setFname]=useState(props.user.fname);
  const [lname,setLname]=useState(props.user.lname);
  const [email,setEmail]=useState(props.user.email);
  const [address,setAddress]=useState(props.user.address);
  const [user, setUser] = useState({});
  

  useEffect(()=>{
    setUid(props.todo.uid);
    setFname(props.user.fname);
    setLname(props.user.lname);
    setEmail(props.user.email);
    setAddress(props.user.address);
  },[props.user])

const createuser=(user)=>{
  return axios.post("/postUser",user).then((data)=>data.json);
}

const edituser=(uid,user)=>{
  return axios.put(`/editUser/user?uid=${uid}`,user).then((data)=>data.json);
}

  const handleSubmit=async (e)=> {
    e.preventDefault();

    const newuser = {
      uid,
      fname,
      lname,
      email,
      address
    };
    setUser(newuser);
    user['uid']=parseInt(newuser.uid);
    if(user.contains(uid)){
      await edituser(props.user.uid,newuser);
    }
    else{
      
      await createuser(newuser);
    }
   
  };

 

  return (
    <Modal open={props.formOpenUser}
    title = "Create/Edit User"
    onCancel={props.userclose}
    destroyOnClose={true}>

      <h1> User List</h1>
      <form onSubmit={handleSubmit}>
        <label for="uid">User id</label>
        <input type="text"
        onChange={(event)=>{setUid(event.target.value)}} value={uid}></input>

        <label for="fname">First Name</label>
        <input type="text"
        onChange={(event)=>{setFname(event.target.value)}} value={fname}></input>

        <label for="lname">Last Name</label>
        <input type="text"
        onChange={(event)=>{setLname(event.target.value)}} value={lname}></input>

        <label for="email">Email</label>
        <input type="text"
        onChange={(event)=>{setEmail(event.target.value)}} value={email}></input>

        <label for="address">Address</label>
        <input type="text"
        onChange={(event)=>{setAddress(event.target.value)}} value={address}></input>

        <input type="submit"></input>
        </form>
        </Modal>
        
  );
};

export default User;