import React from "react";

const Folder = ({ explorer,handleAddingFolderFile,handleDelete }) => {
  const [expand, setExpand] = React.useState(false);
  const [showInput, setShowInput] = React.useState({
    inputShow: false,
    isFolder: null,
  });

  const dynamicClass = `${expand ? "md:block" : "md:hidden"}`;

  const onToggleExpand = () => {
    setExpand(!expand);
  };

  const handleOnClick = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      inputShow: true,
      isFolder,
    });
  };
  
  const OnAddFolderFile = (e) => {
    if (e.target.value && e.keyCode === 13) {
      handleAddingFolderFile(explorer.id,e.target.value,showInput.isFolder)
      setShowInput({
        ...showInput,
        inputShow: false,
      });
    }
  };

  const handleDeleteFile=(id)=>{
    handleDelete(id)

  }

  return (
    <>
      {explorer.isFolder ? (
        <>
          <div class="flex">
            <span class="cursor-pointer" onClick={onToggleExpand}>
              📁{explorer.name}
            </span>
            <div class="ml-10">
              <button
                class="border-2 border-solid border-gray mr-5"
                onClick={(e) => handleOnClick(e, true)}
              >
                Folder+
              </button>
              <button
                class="border-2 border-solid border-gray mr-5"
                onClick={(e) => handleOnClick(e, false)}
              >
                File+
              </button>
              <button
                class="border-2 border-solid border-gray mr-5"
                onClick={() => handleDeleteFile(explorer.id)}
              >
                delete-
              </button>
            </div>
          </div>
          <div>
            {showInput.inputShow && (
              <input
                autoFocus
                type="text"
                onKeyDown={(e) => OnAddFolderFile(e)}
                onBlur={() =>
                  setShowInput({
                    ...showInput,
                    inputShow: false,
                  })
                }
              />
            )}
          </div>

          <div class={dynamicClass}>
            {explorer.items.map((exp) => {
              return (
                <div class="m-2 pl-8">
                  <span>
                    <Folder explorer={exp} handleAddingFolderFile={handleAddingFolderFile} handleDelete={handleDelete}/>
                  </span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div class="flex">
          <span>🗄️{explorer.name}</span>
          <div> <button
                class="border-2 border-solid border-gray mr-5"
                onClick={() => handleDeleteFile(explorer.id)}
              >
                delete-
              </button></div>
        </div>
      )}
    </>
  );
};

export default Folder;
