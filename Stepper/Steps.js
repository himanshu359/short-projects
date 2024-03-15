import Stepper from "./Stepper"
import React from 'react'

export const Steps=()=>{
    const [list,setList] = React.useState([<Example1/>,<Example2/>,<Example3/>,<Example4/>,<Example5/>])

    return(
        <>
        <Stepper list={list}/>
        </>
    )
}

const Example1=({onPrev, onNext})=>{
    return(
        <>
        hello1
        <button class="p-2 bg-blue-200  m-2" onClick={onPrev}>prev</button>
        <button class="p-2 bg-blue-200  m-2" onClick={onNext}>Next</button>
        </>
    )
}

const Example2=({onPrev, onNext})=>{
    return(
        <>
        hello2
        <button class="p-2 bg-blue-200  m-2" onClick={onPrev}>prev</button>
        <button class="p-2 bg-blue-200  m-2" onClick={onNext}>Next</button>
        </>
    )
}

const Example3=({onPrev, onNext})=>{
    return(
        <>
        hello3
        <button class="p-2 bg-blue-200  m-2" onClick={onPrev}>prev</button>
        <button class="p-2 bg-blue-200  m-2" onClick={onNext}>Next</button>
        </>
    )
}

const Example4=({onPrev, onNext})=>{
    return(
        <>
        hello4
        <button class="p-2 bg-blue-200  m-2" onClick={onPrev}>prev</button>
        <button class="p-2 bg-blue-200  m-2" onClick={onNext}>Next</button>
        </>
    )
}

const Example5=({onPrev, onNext})=>{
    return(
        <>
        hello5
        <button class="p-2 bg-blue-200 m-2" onClick={onPrev}>prev</button>
        <button class="p-2 bg-blue-200 m-2" onClick={onNext}>Next</button>
        </>
    )
}