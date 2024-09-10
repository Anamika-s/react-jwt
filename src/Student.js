
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';
import React, { useEffect, useState } from 'react'

export const Student = () => {
  const [students, setStudents] = useState([]);
  const[Offline, setOffline] = useState(false);
let token = localStorage.getItem("token")
  alert("aaa");
  useEffect(()=>
{   
   console.log("IN student " + token);
    // const headers = { 'Authorization': 'Bearer {token}' };
    const getData = async()=>{
      try{  
      const res = await fetch("http://localhost:5022/api/student",
          { 
            method:'GET',
            headers :{
      "Authorization" : `Bearer ${token}`}}
          );
        
       const json = await res.json();
    console.log(json)
    
    setStudents(json);
    localStorage.setItem('students', JSON.stringify(json));
        
    }
  catch(error)
{
  console.log("ERROR")
  let apiData = localStorage.getItem("students");
 setStudents(JSON.parse(apiData));
 console.log("api data ************************")
 console.log(students)
 setOffline(true);

}};
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
      
     {  Offline ? <h1 style={{color:'red'}}> I am Offline </h1> :  <h1> List of Users  </h1>} 
    
     <table> 
  <tr>
    <th> Id </th>
    <th> Name </th>
  </tr>
</table>
  {
     students ?
       students.map((item,i)=>
       <p>  {item.id} --- {item.name} </p>
       ) :

  <h2> No users </h2>
  }
    </div>
  )
}
