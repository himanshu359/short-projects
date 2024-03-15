import React from "react";

const Race = () => {
    const [searchText,setSearchText]=React.useState('');
    
    const handleChange=(e)=>{
        const {value} = e.target;
        setSearchText(value);
    }

    return (
        <div class="flex flex-col items-center justify-center">
        <input type='text' value={searchText} onChange={(e)=>handleChange(e)}></input>
        <span>{searchText}</span>
        </div>
    )


}

export default Race;
