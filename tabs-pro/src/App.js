import React,{useEffect, useState} from 'react'
import Loading from "./components/Loading"
import Error from "./components/Error"
import Buttons from "./components/Buttons"
const url = "https://course-api.com/react-tabs-project"


const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] = useState (false);
    const[displayIndex, setDisplayIndex] = useState(0)
    const[data, setIsData] = useState([])
    console.log(data)
 
    //fetch data
    const fetchData= ()=>{
fetch(url)
.then((resp)=>{
    if(resp.status>200|| resp.status<299){
        return resp.json();

    }

    else{
        setIsError(true);
        setIsLoading(false);
    }
    
})
    .then((data)=>{
        setIsData(data);
        setIsLoading(false);
    })  
    }

useEffect(()=>{
    fetchData();
},[])



    if(isLoading){
        return <Loading/>
    }

      const{id, order, title, dates, duties, company} = data[displayIndex];
console.log(id)
    if(isError){
        return <Error/>
    }
    return (
   <section>


{data.map((value, index)=>{
const{company, id} = value
return <button onClick={()=>setDisplayIndex(index) } key={id}> {company}</button>
})}

        <div>
      <h1>{company}</h1>
      <h1>{title}</h1>
      <p>{dates}</p>
      <p>{duties}</p>
        </div>
        </section>
    )
}

export default App
