import React, { useEffect, useState } from "react";
import "./ProductSingle.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getProductSingleStatus,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../assets/images/loader.svg";
import { formatPrice } from "../../utils/helpers";

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getProductSingleStatus);

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, []);

  console.log(product);

  return <div className="product-single">ProductSinglePage</div>;
};

export default ProductSinglePage;
