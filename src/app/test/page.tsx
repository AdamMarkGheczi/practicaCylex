'use client'

import React, { use, useState } from 'react'

export default function page() {
    
    const [fetchedAlready, setFetchedAlready] = useState(false);
    const [data, setData] = useState({data: []});
    const [isLoading, setisLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        if (!fetchedAlready){
            setisLoading(true);

            try {
                const response = await fetch('/api/openai', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if(!response.ok){
                    throw new Error(`Error! ${response.status}`)
                }

                const result = await response.json();

                console.log(result);

                setData(result)
            } catch (err:any) {
                setErr(err.message);
            }finally{
                setisLoading(false);
            }

            setFetchedAlready(true);
        } else {
            alert("You can't fetch more than once")
        }
    }

    return (
    <div className = "h-[50vh]">
        {err && <h2>{err}</h2>}
        <button onClick = {handleClick}> Fetch data</button>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && <h2 className = "text-3xl">{data.text}</h2>}

    </div>
  )
}
