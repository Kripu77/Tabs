import React,{useState, useEffect} from 'react'
import Loading from "./components/Loading"
import Error from './components/Error';
import Buttons from './components/Buttons';

const url = "https://course-api.com/react-tabs-project";

const App = () => {

    const[isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] = useState(false);
    const[index, setIndex] = useState(0)
    const[userData, setUserData] = useState([]);


    //fethc the data from the API

    const fetchData = ()=>{
        fetch(url)
        .then((resp)=>{
            if(resp.status>200||resp.status<299){
                return resp.json()
            }
            else{
                setIsError(true)
                setIsLoading(false)
            }
        })
        .then((data)=>{
setUserData(data);
setIsLoading(false)
        })
    }

useEffect(()=>{
    fetchData();
},[])

if(isLoading){
    return <Loading/>
}
if(isError){
    return <Error/>
}
//once the data fetchin is completed we then destructre the value based on the index,
//if we do desctruring index based value above loading component than react will complaint and throw error to the window

console.log(userData)
const{id, order, title, dates, duties, company  } = userData[index]; //using the index to display only specifc section

    return (
        <main>
            <Buttons data={userData} setDis={setIndex}/>
        <div>
            <h1> {company}</h1>
            <h3>{title}</h3>
            <p>{dates}</p>
            <p>{duties}</p>
            <p>{order}</p>
        </div>
        </main>
    )
}

export default App
