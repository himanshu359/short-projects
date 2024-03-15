import React from 'react';
import { timerConstants } from './constant';


const Timer=()=>{
    const [startTime,setStartTimer]=React.useState(false)
    const [count,setCount]=React.useState(0);

    React.useEffect(()=>{
        let time;
        if(startTime){
            time= setInterval(()=>{
                setCount((count)=>count+1);
            },1000)
        }
        return () => {clearInterval(time)}
    },[startTime])

    const handleStart=(timerConst)=>{
        if(timerConst=== timerConstants.start) setStartTimer(true)
        else if (timerConst === timerConstants.stop) setStartTimer(false)
        else {

            setStartTimer(false)
            setCount(0)
    }
    }


    return (
        <div class="flex flex-col items-center justify-center">
        <div>
            {count}
        </div>
        <div class='flex'>
        <button type="button" class='pr-2 border-solid border-blue-200 border-2 w-20 m-2' onClick={()=>handleStart(0)}> Start </button>
        <button type="button" class='pr-2 border-solid border-blue-200 border-2 w-20 m-2' onClick={()=>handleStart(1)}> Stop </button>
        <button type="button" class='pr-2 border-solid border-blue-200 border-2 w-20 m-2' onClick={()=>handleStart(2)}> Reset </button>


        </div>
       
        </div>
    )

    
}

export default Timer;