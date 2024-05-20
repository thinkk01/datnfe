import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/ProductApi";
import { Pagination } from "antd";
import BaseProductItem from "../base-component/BaseProductItem";
const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});
  const [active, setActive] = useState(true);
  //fetchdata
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts(page, 12, active);
        if (!response) {
          throw new Error("Failed to fetch data!");
        }
        setProducts(response.data.content);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [page]);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPage = products.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);
  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="ml-[200px] mr-[200px]">
      <h2 className="text-center rounded-md shadow-xl text-5xl py-[100px] font-black">
        New Products
      </h2>
      <div className="grid mt-[72px] grid-cols-3 gap-5">
        {products &&
          currentItems.map((item, _index) => (
            <BaseProductItem
              index={_index}
              itemImage={item.image}
              itemId={item.id}
              itemName={item.name}
              itemBrand={item.brand}
              itemPrice={item.price}
              itemDisCount={item.discount}
              itemView={item.view}
              labelNew={true}
            />
          ))}
      </div>

      <div className="flex justify-center pt-10">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={totalPage}
          onChange={onChangePage}
          showQuickJumper={false}
          showLessItems={true}
          hideOnSinglePage={true}
        />
      </div>
    </div>
  );
};

export default ListProduct;
