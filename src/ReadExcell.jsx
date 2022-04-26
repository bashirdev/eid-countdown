import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import readXlsxFile from 'read-excel-file'
import Cleave from 'cleave.js/react';

const ReadExcell = () => {
  const [excell,setExcell] = useState([])
  console.log(excell);
    const ReadExcells=()=>{
       let myFile=document.getElementById('myFile');
         
       readXlsxFile(myFile.files[0]).then(data=>{
           alert(data)
        //    console.table(data)
           setExcell(data)
       })
    }
//   const excellData=excell.map(item=> item)

    return (
        <div>
            <input id='myFile' type='file' />
            {excell.map(item=>(
                <>
                    <ul key={item._id}>
                        <li>{item.fullName}</li>
                    </ul>
                </>
            ))}
            <button onClick={()=>ReadExcells()}>Read Excell</button>
            <ReactCodeInput type='number' fields={6} />
            <Cleave 
           
//   options={{ phone: true,
//     phoneRegionCode:`{country}`}}
options={{date:true, delimiter:'/', datePattern:['d','m','Y']}}
                 />
        </div>
    );
};

export default ReadExcell;