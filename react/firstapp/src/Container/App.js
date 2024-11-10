import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    const [title] = useState('Developer Funnel')
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);

    const handleClick = () => {
      setCount(count+1)
    }

    return (
      <>
        <Header/>
        <div style={{height:'300px',backgroundColor:'skyblue', fontSize:'20px'}}>
          <h1>{title}</h1>
          <h2>{count}</h2>
          <button onClick={handleClick}>Counter</button>
          <h2>{count1}</h2>
          <button onClick={()=> {setCount1(count1+1)}}>Counter</button>
        </div>
        
        <Footer/>
      </>
      
    )
}

export default App;
