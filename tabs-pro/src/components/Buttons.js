import React from 'react'

const Buttons = ({fnlBtn, filterBtn}) => {
    return (
        <div>{
            fnlBtn.map((value, index)=>{
                return  <button onClick={()=>filterBtn(value)} key={index}>{value}</button>
            })}
            <h2>hollla</h2>
        </div>
    )
}

export default Buttons
