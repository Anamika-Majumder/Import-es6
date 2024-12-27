import { useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {

   const [watches, setWatches] = useState([]);

  useEffect( () =>{
    fetch('Watches.json')
    .then(res=> res.json())
    .then(data =>setWatches(data))
  },[])

  //   const Watches = [
  //   { id: 1, name: "Apple Watch Series 8", price: 399 },
  //   { id: 2, name: "Samsung Galaxy Watch 6", price: 299 },
  //   { id: 3, name: "Garmin Venu 2 Plus", price: 449 },
  //   { id: 4, name: "Fitbit Versa 4", price: 229 },
  //   { id: 5, name: "Huawei Watch GT 3 Pro", price: 329 }
  // ];

  return (
    <>
     
      <h1>Vite + React</h1>
     {
      Watches.map(watch => <Watch  Key ={watch.id}watch={watch}></Watch> )
     }
    </>
  )
}

export default App
