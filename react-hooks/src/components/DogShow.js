import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DogShow = ()=>{
    // const [ data,setData ] = useState(null)
    const [ url, setUrl ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ fetch, setFetch ] = useState(false)
    const style = {
        width: 200
    }
    useEffect(()=>{
        // fetch('https://dog.ceo/api/breeds/image/random').then(res=>res.json()).then(data=>{
        //     setData(data)
        // })
        setLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random').then(res=>{
            setUrl(res.data.message)
            setLoading(false)
        })
    }, [fetch])
    return (
        <>
        { loading ? <p>🐕读取中...</p> : <img src={url} alt="dog" style={style} /> }
        <button onClick={()=>{setFetch(!fetch)}}>再看一张图片</button>
        </>
    )
}

export default DogShow