import React from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authSchema from "../schemaValidate/authSchema";
import api from "../axios";
import { useNavigate } from "react-router-dom";

function Auform({ isForm }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data) => {
    try {
      if (isForm) {
        await api.post(`/login`, data);
        navigate("/");
      } else {
        await api.post(`/register`, data);
        if (
          confirm(
            "Bạn đã đăng ký thành công! Hãy chuyển sang trang Login để đăng nhập "
          )
        ) {
          navigate("/login");
        }
        reset();
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center">{isForm ? "Login" : "Sigin"}</h1>
      <div className="mb-3">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" {...register("email")} />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary w-100">
          {isForm ? "Login" : "Sigin"}
        </button>
      </div>
    </form>
  );
}

export default Auform;
