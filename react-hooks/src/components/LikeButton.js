import React, { useState } from 'react'

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