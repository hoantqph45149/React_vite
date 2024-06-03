import React from "react";
import { Link } from "react-router-dom";
import s from "./ProductItem.module.scss";
const ProductItem = ({ data }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className={s.product}>
        <Link to={`/product-detail/${data.id}`}>
          <img
            src={data.thumbnail}
            className={s.product_img}
            alt={data.title}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>
        <div className={s.card_body}>
          <h5 className={s.card_title}>
            <Link to={`/product-detail/${data.id}`}>{data.title}</Link>
          </h5>
          <p className={s.card_text}>{data.price} $</p>
          <div>
            <Link to={`/product-detail/${data.id}`} className="btn btn-warning">
              Xem chi tiết sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
