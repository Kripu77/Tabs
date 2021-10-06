import React from 'react'

const Main = ({section}) => {
     
    return (
        <div>
         {section.map((value)=>{
            const{id, company, dates, duties, order, title} = value;
             return(<div key={order}>


                 <h1>{company}</h1> 
                 <h2>{title}</h2>
                 <h2>{dates}</h2>
                 <p>{duties}</p>
                 <p>{order}</p>

                 
                 
                 </div>)
         })}
        </div>
    )
}

export default Main
