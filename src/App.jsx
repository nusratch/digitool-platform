import { useEffect, useState } from 'react'
import './App.css'
import { Cards } from './components/Cards/Cards'
import { Banner } from './components/banner/Banner'
import Nav from './components/navbar/nav'
import { States } from './components/states/States'


function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => {
        console.error('Failed to load cards:', error)
      })
  }, [])

  return (

    <>

      <Nav />
      <Banner />
      <States />

      <Cards cards={cards} />
     


    </>



  )
}

export default App