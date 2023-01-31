import styles from './App.module.css';
import {useState,useEffect} from "react"
import Weather from './weather';







function App() {
  

    
  return (
    <div className="App">
      <div className={styles.container}>
      

      <Weather/>


      </div>
    
      

      </div>
      
      
      

  );
}

export default App;
