import React from "react";
import { LuStar } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import BaseRating from "./BaseRating";
import { BiSolidShoppingBag } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
const BaseProductItem = (props) => {
  const {
    index,
    itemImage,
    itemId,
    itemName,
    itemBrand,
    itemPrice,
    itemDisCount,
    itemView,
    labelNew,
  } = props;
  return (
    <div
      className="flex relative justify-between flex-col gap-3 card h-full mini-pro"
      key={index}
    >
      {labelNew === true && (
        <div className="absolute translate-x-[-17px] translate-y-[-17px] text-yellow-50 bg-red-400 py-1 px-2">
          <span className="flex gap-4 d-flex items-center px-2 py-1">
            <LuStar /> <span className="text-xl  font-medium">New</span>
          </span>
        </div>
      )}

      <NavLink to={`/product-detail/${itemId}`}>
        <img
          src={require(`../../static/image/product/${itemImage}`)}
          alt="Product"
          className=" w-full object-cover aspect-4/3"
        />
      </NavLink>
      <div className="flex justify-between">
        <strong>
          <NavLink
            to={`/product-detail/${itemId}`}
            className="upcacase text-2xl "
          >
            {itemName}
          </NavLink>
        </strong>
        <small>
          <NavLink to="#" className="uppercase">
            {itemBrand}
          </NavLink>
        </small>
      </div>
      <p className="flex items-center gap-1 ">
        <BaseRating defaultRate={4} />
      </p>
      <div>
        <p className="mb-0 small">
          <b>Yêu thích: </b> {itemView} lượt
        </p>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="">
          <p className="mb-0 small">
            <strike className="text-slate-500">
              Giá gốc: {itemPrice.toLocaleString()}đ
            </strike>
          </p>
          <p className="mb-0 small text-danger text-slate-500">
            <span className="font-weight-bold text-slate-500">Tiết kiệm: </span>{" "}
            {((itemPrice * itemDisCount) / 100).toLocaleString()}đ (
            {itemDisCount}%)
          </p>
        </div>
        <div className="text-2xl">
          <div className="d-flex justify-content-between">
            <div>
              <strong className="h4 text-primary mini-card">
                Giá bán:{" "}
                {((itemPrice * (100 - itemDisCount)) / 100).toLocaleString()}đ
              </strong>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex text-slate-900 justify-between border bg-lime-400 hover:bg-lime-300 w-[80%]">
            <NavLink
              to={`/product-detail/${itemId}`}
              exact
              className=" hover:text-slate-500 w-full justify-center flex items-center text-semibold  px-6 py-3 gap-2"
            >
              Thêm vào giỏ
              <BiSolidShoppingBag />
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="#"
              className="btn btn-outline-success"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to Wishlist"
            >
              <BsHeart />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseProductItem;
