import { useEffect, useState } from "react"

export default function OuoteFetcher(){
    const [quote, setQuote] = useState({content : "", author : ""});
    async function handleClick(){
        const res = await fetch("https://api.quotable.io/random")
        const {...data} = await res.json();
        setQuote({content : data.content, author : data.author});
    }

    useEffect(() => {
        handleClick();
    }, [])
    return<>
    <button onClick={handleClick}>Change Quote</button>
    <h1>{quote.content}</h1>
    <h3>{quote.author}</h3>
    </>
}