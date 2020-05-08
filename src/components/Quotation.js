import React from 'react';

const Quotation = ({result}) => {
   //so it doesn't run if the object comes empty
    if(Object.keys(result).length === 0) return null

    console.log(result)
    return ( <div>
        <p>The price is: <span>{result.PRICE}</span></p>
        <p>Highest price of the day: <span>{result.HIGHDAY}</span></p>
        <p>Lowest price of the day: <span>{result.LOWDAY}</span></p>
        <p>Variation in the last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></p>
        <p>Last Update: <span>{result.LASTUPDATE}</span></p>       
    </div> );
}
 
export default Quotation;