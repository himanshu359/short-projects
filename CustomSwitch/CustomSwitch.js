import React from 'react'
import { Children } from 'react'

export const Switch=()=>{

    const CustomSwitch=({children,value})=>{
        let cases=[];
        Children.forEach(children,(e)=>{
           if(e.type.name==='CustomCase'){
            if(typeof e.props.value==='function'){
                if(e.props.value(value)) cases.push(e);
            }else if(value=== e.props.value){
                cases.push(e);
            }
           }
        })
        if(cases.length > 0){
            return cases;
        }
    }
    const CustomCase=({children})=>{
        return<> {children} </>
    }

    return(
        <CustomSwitch value='20'>
            <CustomCase value={(e)=>e>10}> Hello 10 </CustomCase>
            <CustomCase value="20">hello 20</CustomCase>
            <CustomCase value="30">hello 30</CustomCase>
            <CustomCase value="40">hello 40</CustomCase>
            <CustomCase value="50">hello 50</CustomCase>
            <CustomCase value="60">hello 60</CustomCase>

        </CustomSwitch>
    ) 
}