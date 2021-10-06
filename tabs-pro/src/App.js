import React, {useState, useEffect} from 'react'
import Error from './components/Error';
import Loading from './components/Loading';
import Main from './components/Main';
const url = "https://course-api.com/react-tabs-project";
const App = () => {
    const[section, setSection] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[isError, setIsError]=  useState(false)
    

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
    
    
    if(isLoading){
        return <Loading/> 
    }
    if(isError){
        return <Error/>
    }
    return (
        <div>
          <Main/>
        </div>
    )
}

export default App
