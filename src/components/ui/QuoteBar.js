import React, { useState, useEffect } from 'react'

const QuoteBar = ({ quotes, isLoading }) => {

  let random = quotes[Math.floor(Math.random()*quotes.length)];
  
  return (
    isLoading ? <h5></h5> :
    <section className='quote-bar'>
        <h1 style={{textAlign: 'center' }}><i>"{random.quote}"</i></h1>
        <br></br>
    
        <h3 style={{textAlign: 'right' }}><strong>{random.author}</strong></h3>
        
    </section>
  )
}

export default QuoteBar
