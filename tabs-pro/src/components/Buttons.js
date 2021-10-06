import React from 'react'

const Buttons = ({fnlBtn}) => {
    return (
        <div>{
            fnlBtn.map((value, index)=>{
                return  <button key={index}>{value}</button>
            })}
            <h2>hollla</h2>
        </div>
    )
}

export default Buttons
