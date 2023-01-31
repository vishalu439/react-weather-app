import styles from './App.module.css';
import {useState,useEffect} from "react"
import Weather from './weather';
let key="fb9a1444ba0719551b596b9e04aa8a7a"





function App() {
  
  const[data,newData]=useState([])
  const[loading,setLoading]=useState("true")
  const[city,updateCity]=useState("")
  let handleSubmit=(e)=>{
    e.preventDefault()
    
    fetchData()
    
    
    
    }
    

  const fetchData=async ()=>{
    try {
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    const data=await response.json()
    newData(data)
    setLoading(false)
    //console.log(data)
    } catch (error) {
      throw error;
      setLoading(false)
      console.log('error')
    }
    
    
    
    }
    useEffect(()=>{

    fetchData()

    },[])
  return (
    <div className="App">
    <form >
      <input name="city" id="city" type="text" placeholder="City" value={city} onChange={(e)=>updateCity(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
      <div className={styles.container}>
       
        </div>
        <Weather data={data} loading={loading}/>
       

      </div>
      
      
      

  );
}

export default App;
