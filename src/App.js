import './App.css';
import { useEffect,useState } from 'react';
import UserList from './UserList';
import axios from 'axios'
function App() {
const [user,setUser]= useState()
      useEffect(()=>{
        function getData() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {
setUser(res.data)
        }).catch((err)=>{
          console.log(err)
        })
        
      }
      getData()
      },[])
    console.log(user);  
  

  return (
    <div className="App">
      {
      (user === undefined)? "not exist" :
      user.map((el,key)=>{
        return <UserList element ={el} key={el.id}/>})
      }
    </div>
  )}
export default App;
