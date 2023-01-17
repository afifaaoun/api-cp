import './App.css';
import { useEffect} from 'react';
// import { useState} from 'react';
import UserList from './UserList';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { sendData } from './toolkit/UserSlice';
import {Route, Routes} from "react-router-dom"
import Details from './Details';
import ContainerList from './ContainerList';

function App() {
  // user li mawjoud fl store ; list hya l name li mawjoud fl initialstate
  const resultat = useSelector( state => state.user.list)
  const dispatch = useDispatch()
  console.log(resultat);
// const [user,setUser]= useState()
      useEffect(()=>{
        function getData() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {
// setUser(res.data)
dispatch(sendData(res.data))
        }).catch((err)=>{
          console.log(err)
        })
        
      }
      getData()
      },[])
    // console.log(user);  
  

  return (
    <div className="App">
      
       <div>
      <Routes>
        <Route path="/" element={<ContainerList resultat={resultat}/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        </Routes>
       </div>
       {/* louken men 8ir store lezem condition bch ma ya3mlch lmap 3l undefined f kol refresh ll page w ya3tik error */}
      {/* {(user === undefined)? "not exist" :
      res.map((el,key)=>{
        return <UserList element ={el} key={el.id}/>})
     
      }  */}
       
    </div>
  )}
export default App;
