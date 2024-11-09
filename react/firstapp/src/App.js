import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    const [title] = useState('Developer Funnel')
    const [count,setCount] = useState(0);

    const handleClick = () => {
      setCount(count+1)
    }

    return (
      <div>
        <Header/>
        <h1>{title}</h1>
        <h2>{count}</h2>
        <button onClick={handleClick}>Counter</button>
        <Footer/>
      </div>
      
    )
}

export default App;