import React from 'react'

const Buttons = ({data, setDis}) => {
    return (
        <div>
          {data.map((value, index)=>{
              return <button onClick={()=>setDis(index)}> {value.company} </button>

          })}  
        </div>
    )
}

export default Buttons
