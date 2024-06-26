import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import api from "./axios";
import { getProducts } from "./axios/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Auform from "./pages/AuForm";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdd from "./pages/admin/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = (data) => {
    console.log(data);
    (async () => {
      try {
        if (data.id) {
          await api.patch(`/products/${data.id}`, data);
          const newData = await getProducts();
          setProducts(newData);
          if (
            confirm("Bạn đã sửa thành công , bạn có muốn trở về trang Admin ?")
          ) {
            navigate("/admin");
          }
        } else {
          const res = await api.post("/products", data);
          setProducts([...products, res.data]);
          if (confirm("Add succefully, redirect to admin page?")) {
            navigate("/admin");
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleDelete = (id) => {
    // console.log(id);
    (async () => {
      try {
        const isConfirm = confirm("Bạn có muốn xóa sản phẩm này không ?");
        if (isConfirm) {
          await api.delete(`/products/${id}`);
          setProducts(products.filter((product) => product.id !== id));
        }
      } catch (error) {}
    })();
  };

  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home data={products} />} />
          <Route path="/login" element={<Auform isForm={true} />} />
          <Route path="/sigin" element={<Auform isForm={false} />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin"
            element={
              <Dashboard data={products} onDeleteProduct={handleDelete} />
            }
          />
          <Route
            path="/admin/formproduct"
            element={<ProductAdd onAddProduct={handleSubmit} />}
          />
          <Route
            path="/admin/formproduct/:id"
            element={<ProductAdd onAddProduct={handleSubmit} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
