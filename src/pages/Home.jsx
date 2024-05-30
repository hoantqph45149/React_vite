import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div className="row ">
      {data.map((item) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={item.id}>
          <div className="card">
            <Link to={`/detail/${item.id}`}>
              <img
                src={item.thumbnail}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </Link>
            <div className="card-body text-center">
              <h5 className="card-title ">
                <Link to={`/detail/${item.id}`}>{item.title}</Link>
              </h5>
              <p className="card-text">{item.price} $</p>
              <div>
                <Link to={`/detail/${item.id}`} className="btn btn-warning">
                  Xem chi tiết sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
