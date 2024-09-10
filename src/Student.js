
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';
import React, { useEffect } from 'react'

export const Student = () => {
let token = localStorage.getItem("token")
  alert("aaa");
  useEffect(()=>
{   
   console.log("IN student " + token);
    // const headers = { 'Authorization': 'Bearer {token}' };
    const getData = async()=>{
        const res = await fetch("http://localhost:5022/api/student",
          { 
            method:'GET',
            headers :{
      "Authorization" : `Bearer ${token}`}}
          );
        
       const json = await res.json();
    console.log(json)
        };
    getData();
},[])

// useEffect(() => {
//   console.log("in stu")
  
//   alert(token)
//   const headers = { 'Authorization': token};
//   console.log("headers"+ headers)
//   fetch("http://localhost:5022/api/student", { headers })
//       .then((response) => response.json())
//       .then((res) => console.log(res));
  
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
    return (
    <div>Student
    

    </div>
  )
}
