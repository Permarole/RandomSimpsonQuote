import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
import { useState } from 'react';
import Axios from 'axios';


function App() {
  const [quoteInfo, setQuoteInfo] = useState();
  const getQuoteInfo = () => {
    Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => setQuoteInfo(data[0]));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Random Famous Quote From The Simpsons
        </h1>
        {quoteInfo ? <QuoteCard quote={quoteInfo}/> : ''} 
        <button type="button" onClick={getQuoteInfo}>Generate Quote</button>
      </header>

  
    </div>
  );
}

export default App;
