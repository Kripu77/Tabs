import React, {useState, useEffect} from 'react';
import Loading from "./components/Loading"
import Error from "./components/Error"
const URL = "https://course-api.com/react-tabs-project";


const App = () => {
const[isLoading, setIsLoading] =useState(true); //when the data fetching is in the process
const [isError, setIsError] = useState(false); //incase of any 404 error we change the state
const[userData, setUserData] = useState([])
    //fetch data 1st from the api

    const fetchData = ()=>{
        fetch(URL)
        .then((resp)=>{
            if(resp.status>200|| resp.status<299){
                return resp.json();}
                else{
                    setIsError(true)
                    setIsLoading(false);
                }
        })
        .then((data)=>{
            setUserData(data);
            setIsLoading(false)
        })
    }

//useEffect to setup the render once
useEffect(()=>{
    fetchData();
},[])
    if(isLoading){
        return <Loading/>
    }
    if(isError){
        return <Error/>
    }
    return (
        <div>
            <h1> test</h1>
        </div>
    )
}

export default App
