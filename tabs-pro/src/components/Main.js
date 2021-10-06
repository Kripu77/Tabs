import React from 'react'

const Main = ({id, order, title, dates, duties, company }) => {
    
    return (
        <div className="job-info">
             
            <h3>{title}</h3>
            <h4> {company}</h4>
            <p className="job-dates">{dates}</p>
            <p>{duties}</p>
          
        </div>
    )
}

export default Main
