import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { filterProducts, getAllProducts } from "../../api/ProductApi";
import "../Page.css";
import BaseProductItem from "../../components/base-component/BaseProductItem";
import { brands } from "../../constant/brand";
import { categories } from "../../constant/categories";
import { prices } from "../../constant/prices";

const count = 12;
const defaultBrand = [1, 2, 3, 4, 5, 6, 7];
const defaultCategory = [1, 2, 3, 4, 5, 6, 7];

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000000);

  var rows = new Array(total).fill(0).map((zero, index) => (
    <li
      className={page === index + 1 ? "page-item active" : "page-item"}
      key={index}
    >
      <button className="page-link" onClick={() => onChangePage(index + 1)}>
        {index + 1}
      </button>
    </li>
  ));

  useEffect(() => {
    if (category.length === 0 && brand.length === 0 && price.length === 0) {
      getAllProducts(page, count, true).then((response) => {
        setProducts(response.data.content);
        setTotal(response.data.totalPages);
      });
    } else {
      const data = {
        page: page,
        count: count,
        category: category.length > 0 ? category : defaultCategory,
        brand: brand.length > 0 ? brand : defaultBrand,
        min: min,
        max: max,
      };
      filterProducts(data).then((resp) => {
        setProducts(resp.data.content);
        setTotal(resp.data.totalPages);
      });
    }
    props.changeHeaderHandler(2);
  }, [page, category, brand, price]);

  const onChangePage = (page) => {
    setPage(page);
  };

  const chooseCategoryHandler = (value) => {
    const index = category.indexOf(value);
    if (index > -1) {
      setCategory(category.filter((i) => i !== value));
    } else {
      setCategory([...category, value]);
    }
    onChangePage(1);
  };

  const chooseBrandHandler = (value) => {
    const index = brand.indexOf(value);
    if (index > -1) {
      setBrand(brand.filter((i) => i !== value));
    } else {
      setBrand([...brand, value]);
    }
    onChangePage(1);
  };

  const choosePriceHandler = (value) => {
    const index = price.indexOf(value);
    let temp = [];
    if (index > -1) {
      temp = price.filter((i) => i !== value);
      setPrice(price.filter((i) => i !== value));
    } else {
      temp = [...price, value];
      setPrice([...price, value]);
    }
    if (temp.length > 0) {
      temp.sort();
      setMin(prices[temp[0]].min);
      setMax(prices[temp[temp.length - 1]].max);
    } else {
      setMin(0);
      setMax(10000000);
    }
    onChangePage(1);
  };
  return (
    <div>
      <div className="mt-5">
        <div className="grid grid-cols-product py-[15px]">
          <div className="">
            <div className="col p-4 mb-[30px] bg-[#ffffff] shadow-3xl">
              <h4 className="text-danger fw-bolder">Thương hiệu</h4>
              <ul className="list-group">
                {brands.map((item, index) => (
                  <div
                    className="sidebar__item"
                    key={index}
                    onClick={() => chooseBrandHandler(item.value)}
                  >
                    <div
                      className={
                        brand.includes(item.value)
                          ? `sidebar__item-inner active`
                          : `sidebar__item-inner`
                      }
                    >
                      <i className={item.icon}></i>
                      <span>{item.display_name}</span>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="col p-4 mb-[30px] bg-[#ffffff] shadow-3xl">
              <h4 className="text-danger fw-bolder">Loại sản phẩm</h4>
              <ul className="list-group">
                {categories.map((item, index) => (
                  <div
                    className="sidebar__item"
                    key={index}
                    onClick={() => chooseCategoryHandler(item.value)}
                  >
                    <div
                      className={
                        category.includes(item.value)
                          ? `sidebar__item-inner active`
                          : `sidebar__item-inner`
                      }
                    >
                      <i className={item.icon}></i>
                      <span>{item.display_name}</span>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            <div className="col p-4 mb-[30px] bg-[#ffffff] shadow-3xl mt-3 ">
              <h4 className="text-danger fw-bolder">Giá</h4>
              <ul className="list-group">
                {prices.map((item, index) => (
                  <div className="sidebar__item" key={index}>
                    <div
                      className={
                        price.includes(item.value)
                          ? `sidebar__item-inner active`
                          : `sidebar__item-inner`
                      }
                      onClick={() => choosePriceHandler(item.value)}
                    >
                      <i className={item.icon}></i>
                      <span>{item.display_name}</span>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="container-fluid padding">
              <div className="container-fluid padding">
                <div className="row welcome mini-card">
                  <h4 className="title text-danger">Sản phẩm nổi bật</h4>
                </div>
              </div>
              <div className="row padding grid grid-cols-4">
                {products &&
                  products.map((item, _index) => (
                    <BaseProductItem
                      key={_index}
                      itemImage={item.image}
                      itemId={item.id}
                      itemName={item.name}
                      itemBrand={item.brand}
                      itemPrice={item.price}
                      itemDisCount={item.discount}
                      itemView={item.view}
                      labelNew={false}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-28">
          <nav aria-label="navigation example">
            <ul className="flex gap-5">
              <li className={page === 1 ? "page-item disabled" : "page-item"}>
                <button className="page-link" onClick={() => onChangePage(1)}>
                  First
                </button>
              </li>
              {rows}
              <li
                className={page === total ? "page-item disabled" : "page-item"}
              >
                <button
                  className="page-link"
                  onClick={() => onChangePage(total)}
                >
                  Last
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Product;
