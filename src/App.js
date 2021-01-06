import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import QuoteBar from './components/ui/QuoteBar'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [quotes, setQuotes] = useState([])




  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const allQuotes = await axios(`https://www.breakingbadapi.com/api/quotes`)
 
      setQuotes(allQuotes.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  //let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  // console.log(quotes[5])
  // let random  = quotes[5]

  return (
    <div className="container">
      <Header />
      <QuoteBar quotes={quotes} isLoading={isLoading} />
      <Search getQuery={(q) => setQuery (q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
