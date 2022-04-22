
import './App.css';
import img1 from '../src/img/img1.png'
import { useEffect, useState } from 'react';

const colorArr=['red', 'green', 'blue','orange']
const gift=[

   {Gift:'$ : 1000',subs:'Your gift is', title:'Open a present'},
   {Gift:'Mobile Phone',subs:'Your gift is', title:'Open a present'},
   {Gift:'$ : 5000',subs:'Your gift is', title:'Open a present'},
   {Gift:'Laptop',subs:'Your gift is', title:'Open a present'},
   {Gift:'$ : 300',subs:'Your gift is', title:'Open a present'},
   {Gift:'Macbook',subs:'Your gift is', title:'Open a present'},
   {Gift:'$ : 400',subs:'Your gift is', title:'Open a present'},
   {Gift:'Smart Watch',subs:'Your gift is', title:'Open a present'},
   {Gift:'$ : 50',subs:'Your gift is', title:'Open a present'},
   {Gift:'Head phone',subs:'Your gift is', title:'Open a present'},

]

function App() {
 const [days, setDays] = useState('')
 const [hours, setHours] = useState('')
 const [minute, setMinute] = useState('')
 const [second, setSecond] = useState('')
const [colorItem, setColorItem] = useState('')
const [giftRand, setGiftRandom] = useState('')

  let eid='03 may 2022'
  function countDowns(){
     let eidDa=new Date(eid)
     let today=Date.now();
     let currentDaysRemain=(eidDa - today) / 1000;

     setDays(Math.floor((currentDaysRemain / 3600) / 24));
     setHours(Math.floor((currentDaysRemain / 3600) % 60))
     setMinute(Math.floor((currentDaysRemain / 60) % 60))
     setSecond(Math.floor((currentDaysRemain % 60)))
    
  }
 
  function colorRand(){
   const coloI=colorArr.map(color=>color.color)
   let r=Math.floor(Math.random() * coloI.length + 1);
   setColorItem(colorArr[r]);
  }
 
useEffect(()=>{
  setInterval(countDowns, 1000)
  setInterval(colorRand, 1000)
},[])


function giftRandom(rand){
   let gif= gift.map((g)=> g)
   let ran=Math.floor(Math.random() * gif.length)
    setGiftRandom(gift[ran])

}
 let t=new Date()
 let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

 let todays= t.toLocaleString('US-en', options);


  return (
    <div className="App">
       <div className='left'>
         <h1>Select your Eid gift</h1>
          <div className='gift'>
             {gift.map((item, ind)=>{
               return(
                 <div key={ind} onClick={()=>giftRandom()} className='giftItem'>
                     <ul>
                       <li ><span>{ind+1}</span> : {item.title}</li>
                     </ul>
                 </div>
               )
             })}
          </div>
       </div>
       <div className='countDown'>
           <h1>Eid day countdown</h1>
           <div className='date'><h3>{todays}</h3></div>
         <div className="box">
    
            <div>
             <span>Days</span>
             <div  className='small-box'>{days}</div>
            </div>
           <div>
                <span>Hours</span>
            <div style={{backgroundColor:`${colorItem}`, transition:'all 6000s ease'}} className='small-box'>{hours}</div>
          </div>
          <div>
          <span>Minutes</span>
            <div style={{backgroundColor:`${colorItem}`, transition:'all 4s ease-in-out'}} className='small-box'>{minute}</div>
          </div>
           <div>
           <span>Seconds</span>
             <div style={{backgroundColor:`${colorItem}`, transition:'all 1s ease-in-out'}} className='small-box'>{second}</div>
           </div>
           
         </div>
       </div>
       <div className='right'>
         <h1>Select your gift item from Left</h1>
          <div>
              <h2  style={{marginBottom:'10%'}}> <span style={{ transition:'all 4s ease-in-out'}}>{giftRand.subs}</span>  {giftRand.Gift ?<span style={{ transition:'all 4s ease-in-out'}}>{giftRand.Gift}</span> : '' }  </h2>
             {!giftRand.Gift ? <img style={{width:'100%', transition:'all 4s ease-in-out'}} src='https://acegif.com/wp-content/uploads/gift-5.gif' alt='gift' />: '' }
          </div>
       </div>
       <p>&copy;{new Date().getFullYear()} by Bashir Ahammed</p>
    </div>
  );
}



export default App;
