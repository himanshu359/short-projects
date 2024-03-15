import React from "react";
import {Data} from './Data';
import Folder from './Folder';
import useTraverse from "./hooks/useTraverse";



const File = () => {
    const [data,setDate]=React.useState(Data);
    const {insertNode, deletNode}=useTraverse();

    const handleAddingFolderFile=(id,item,isFolder)=>{
      const addedFile= insertNode(data,id,item,isFolder);
      setDate(addedFile)
    }

    const handleDelete=(id)=>{
      const otherData= deletNode(data,id)
      setDate(otherData)
    }

  return (
    
    <Folder explorer={data}handleAddingFolderFile={handleAddingFolderFile} handleDelete={handleDelete}/>
    
  )
};

export default File;
