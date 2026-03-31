import './App.css'
import { Cards } from './components/Cards/Cards'
import { Banner } from './components/banner/Banner'
import Nav from './components/navbar/nav'

const fetchcard =async()=> {
    const res = await ("/data.json")
    return res;
}

function App() {
  const cardsPromise=fetchcard ();
  return (
   
<>
<Nav/>
<Banner/>
<states/>
<Cards cardsPromise={ cardsPromis}/>
</>


  
  )
}

export default App