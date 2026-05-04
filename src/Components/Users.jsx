import { useEffect, useState } from "react";

function Users(){
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data));
        },[]);
        return(
            <div>
                <h1>Users List</h1>
                {users.map((user)=>(
                    <div key={user.id}>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Website:</b> {user.website}</p>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }

export default Users;
    