import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode';
export const Login = () => {
    const[username, setUserName] = useState("");
    const[password,setPass] =useState("");
  
    
    const Login = async (e) =>
    {
      e.preventDefault();
  
      var user = {username: username , password:password, roleId:1};
      console.log(user);
      const response = await fetch("http://localhost:5022/api/Login",
      {
       method:'POST',
       headers: { 'Content-Type': 'application/json',
        'Accept':'Appication/json',
        },
       body: JSON.stringify(user)
   });
  
  const res = await response.json();
  let token = res.token;
 if(token!=null)
  console.log(token)
 localStorage.setItem("token", token) 

 const token1 = jwtDecode(token); // decode your token here
console.log(token1.Role)
 console.log(token1);

}
  return (
    <div>Login
<form onSubmit={Login}>
    Enter ussername <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)}/>
 <br/>
 Enter password = <input type='text' value={password} onChange={(e)=>setPass(e.target.value)}/>
 

<button type='submit'> Login  </button>

</form>

    </div>
  )
}
