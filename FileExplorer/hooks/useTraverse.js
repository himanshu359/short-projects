const useTraverse = () => {
  function insertNode(tree, id, item, isFolder) {
    if (tree.id === id && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });

      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, id, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function deletNode(tree, id) {
    if (tree.id === id) {
      return null;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => deletNode(obj, id)).filter((item)=>item!=null);

    return { ...tree, items: latestNode };
  }

  return { insertNode, deletNode };
};

export default useTraverse;
