// src/pages/LoginPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginUser } from '../redux/actions/authActions';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onSubmit = async (data) => {
    const success = await dispatch(loginUser(data));
    if (success) {
      const { from } = location.state || { from: { pathname: "/" } };
      history.replace(from); // Önceki sayfaya veya ana sayfaya yönlendir
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-96">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required"
            })}
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="mr-2"
          />
          <label className="text-sm">Remember me</label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
