import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'

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

    const positions = useMousePosition()
    const [ like,setLike ] = useState(0)
    const [ on,setOn ] = useState(true)
    useEffect(()=>{
        document.title = `点击了${like}次`
    })
    return (
        <>
        <p>{positions.y}</p>
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