import React, { useState, useEffect } from 'react'

const LikeButton = ()=>{
    // const [ like,setLike ] = useState(0)
    // const [ obj, setObj ] = useState({
    //     like: 0,
    //     on: true
    // })
    // return (
    //     <>
    //     <button onClick={()=>{
    //         setObj({like: obj.like+1, on: obj.on})
    //     }}>
    //         {obj.like} 👍
    //     </button>
    //     <button onClick={()=>{
    //         setObj({on: !obj.on, like: obj.like})
    //     }}>
    //         { obj.on ? 'on' : 'off'}
    //     </button>
    //     </>
    // )

    const [ like,setLike ] = useState(0)
    const [ on,setOn ] = useState(true)
    useEffect(()=>{
        document.title = `点击了${like}次`
    })
    return (
        <>
        <button onClick={()=>{
            setLike(like+1)
        }}>
            {like} 👍
        </button>
        <button onClick={()=>{
            setOn(!on)
        }}>
            { on ? 'on' : 'off'}
        </button>
        </>
    )
}

export default LikeButton