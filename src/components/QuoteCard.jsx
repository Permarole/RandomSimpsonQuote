import React from 'react';


function QuoteCard({quote}){
    return (
        quote &&
        <div className="DisplayQuote">
            <h2>{quote.character}</h2>
            <img src={quote.image} alt={quote.character} />
            <p>{quote.quote}</p>
        </div>
    );
}


export default QuoteCard;