import React from 'react'
import localforage from 'localforage'
import { FaBeer } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
const LocalForage=()=>{

    const setData=()=>{
        localforage.setItem('name', "Bashir Ahammed", function(err){
           if(err){
               alert(err)
           }else{
               alert('Data Save Success')
           }
        })
    }

    const getData=()=>{
        localforage.getItem('name',function(err,value){
            console.log(value)
        })
    }

    const removeData=()=>{
         localforage.removeItem('name', function(err){
            if(err){
                alert(err)
            }else{
                alert('Remove items')
            }
         })
    }

    return(
        <div>
          <button onClick={()=> setData()}><AiFillAppstore /> Set Data</button>
          <button onClick={()=> getData()}>Get Data</button>
          <button onClick={()=> removeData() }>Remove Data</button>
          <h3> Lets go for a <FaBeer />? </h3>
        </div>
    )
}

export default LocalForage