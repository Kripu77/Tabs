import React from 'react'

const Buttons = ({data, setDis}) => {
    return (
        <div className="btn-container">
          {data.map((value, index)=>{
              return <button onClick={()=>setDis(index)} key={index} className="btn"> {value.company} </button>

          })}  
        </div>
    )
}

export default Buttons
