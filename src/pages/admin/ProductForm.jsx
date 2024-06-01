import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import api from "./../../axios/index";
import productSchema from "./../../schemaValidate/Schema";

const ProductAdd = ({ onAddProduct }) => {
  const { id } = useParams();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  const onSubmit = (data) => {
    console.log(data);
    onAddProduct({ ...data, id });
  };
  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const { data } = await api.get(`/products/${id}`);
          // console.log(data);
          reset(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{id ? "Edit Product" : "Add Product"}</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description", {
              required: true,
            })}
          />
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Add product
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductAdd;
