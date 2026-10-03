import { useEffect, useState } from "react";


function usercurrencyinfo(currency) {
        const [data, setData] = useState({})
    
    useEffect(() => { 
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    
    
    .then((res) => res.josn())
    .then((res) =>setData(res[currency]))





},[])

    
    
}