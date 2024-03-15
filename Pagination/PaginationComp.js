import React from "react";

const PaginationComp = () => {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPages] = React.useState(0);


  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total/10);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, [page]);

  const handlePreClick = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPage) {
      setPage((page) => page + 1);
    }
  };

  return (
    <>
      <div class="p-5">
        {products.length > 0 && (
          <div class="flex flex-wrap justify-center items-center p-4 ">
            {products.map((p, index) => {
              return (
                <span class="m-10 flex-item text-center  bg-blue-100">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    class="max-w-40 max-h-40 rounded-md"
                  />
                  <span> {p.title}</span>
                </span>
              );
            })}
          </div>
        )}

        {products.length > 0 && (
          <div class="m-1 p-4 flex items-center justify-center">
            <span
              class="pr-1 cursor-pointer border border-solid border-gray-200 border-2 m-1"
              onClick={handlePreClick}
            >
              pre
            </span>
            <span>
              {[...Array(totalPage)].map((_, i) => {
                return (
                  <span
                    class="p-3 cursor-pointer border border-solid border-gray-200 border-2 m-1"
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                  >
                  
                    {i + 1}
                  </span>
                );
              })}
            </span>
            <span
              class="pl-1 cursor-pointer border border-solid border-gray-200 border-2 m-1"
              onClick={handleNextClick}
            >
              nxt
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default PaginationComp;
