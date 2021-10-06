import React, {useState, useEffect} from 'react'
import Buttons from './components/Buttons';
import Error from './components/Error';
import Loading from './components/Loading';
import Main from './components/Main';
const url = "https://course-api.com/react-tabs-project";

//to fetch the button title as per the company


const App = () => {
    const[section, setSection] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[isError, setIsError]=  useState(false)
    const filterBtn = (value)=>{
        if(value==="TOMMY"){
            setSection(section)
        }
setSection(section.filter((values)=>{
    return values.company === value;

}))
}

    //lets fetch data and useEffect hook
    const fetchData = ()=>{
        fetch(url) 
        .then((res)=>{ 
            if(res.status>200|| res.status<299){
              
                  return res.json();
                  
                  
            }
            else{
                 setIsError(true)
                 setIsLoading(false);     
                  }
          })
        .then((data)=>{
            setIsLoading(false)
            setSection(data);
        })
    }
  

    useEffect(()=>{
      fetchData();    },[])


     
const allBtns = new Set(section.map((value)=>{
    return value.company;
}))

const fnlBtn =  Array.from(allBtns);



    if(isLoading){
        return <Loading/> 
    }
    if(isError){
        return <Error/>
    }
    return (
        <div>
            <h1> Experience</h1>
            <Buttons fnlBtn={fnlBtn} filterBtn={filterBtn}/>
          <Main section={section}/>
        </div>
    )
}

export default App
