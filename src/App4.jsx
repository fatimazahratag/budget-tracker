import {use, useEffect, useState} from 'react';
export default function App() {
//  const [visible, setVisible] = useState(true);
//  const [number, setNumber] = useState(0);

 const [photos, setphotos] = useState([]);
//  fetch('https://jsonplaceholder.typicode.com/users')
//  .then((res) => {const data = res.json();console.log(data); return data;})
//async await function
 async function fetchData(){
    const res=await fetch('https://jsonplaceholder.typicode.com/photos')
    const data=await res.json();
  setphotos(data);

  }
  useEffect(()=>{
    fetchData();
    console.log("data fetched");
    console.log(photos);
  },[]);
//  const handleVisible=()=>{
//     setVisible(!visible)
//   };

//  const inc=()=>{
//     setNumber(number+1);
//   console.log(number);
// };


// useEffect(()=>{
//     console.log(" from useEffect");
//   },[number]);

  return (
  <>
      <h1>list of photos:</h1>
     maping photos data
      {photos.map((photo,key)=>{
        return(<div  key={key}> 
          <h2>photos TITLE: {photo.title} </h2>
          <p>url: {photo.url}</p>
          <p>thumbnailUrl: {photo.thumbnailUrl}</p>
          
        
        </div>)})}

    {/* {visible && <h1>Hello, world!</h1>}

    <button onClick={handleVisible}>click</button>
    <button onClick={inc}>{setNumber}</button> */}
  
  </>
  )}