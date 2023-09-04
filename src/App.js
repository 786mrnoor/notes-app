import { useEffect, useState } from 'react';
import './App.css';
import AddNote from './component/AddNote';
import List from './component/List';

function App() {
  console.log('app');
  const [data, setData] = useState([]);

  useEffect(()=>{
    let data = localStorage.getItem('notes');
    if(!data){
      data = []
    }
    setData(data)
  }, [])

  return (
    <div className='wrapper'>
      <AddNote />
      <List />
    </div>
  );
}

export default App;
