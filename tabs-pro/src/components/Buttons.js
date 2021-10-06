import React from 'react'

const Buttons = ({data}) => {
    return (
        <div>
          {data.map((value)=>{
              return <button> {value.company} </button>

          })}  
        </div>
    )
}

export default Buttons
