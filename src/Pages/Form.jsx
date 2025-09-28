import React, { useContext } from "react";
import { ContextCart } from "../components/Context/CartContext";
import { RxCrossCircled } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Form = () => {
  const { showForm, setShowForm } = useContext(ContextCart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("form data", data);

  return (
    <>
      {showForm && (
        <div className="flex items-center justify-center w-screen flex-col h-[620px] bg-green-300">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="xl:w-[400px] w-[300px] xl:h-[600px] flex flex-col gap-2 px-8 justify-center shadow-2xl relative xl:gap-5 pb-5 rounded-xl py-2 bg-amber-50"
          >
            {" "}
            <Link to="/" className="absolute top-3 right-2 text-2xl cursor-pointer">
            <RxCrossCircled
              onClick={() => setShowForm(false)}
              
            />
            </Link>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl text-center">Sign Up</h1>
              <p>
                Already have an account?{" "}
                <span className="text-red-500 cursor-pointer">Login now</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col text-lg text-gray-500">
                <label htmlFor="">Full Name</label>
                <input
                  className="border rounded px-4 xl:w-75 outline-gray-300 py-1 border-gray-300"
                  placeholder="Enter your name"
                  type="text"
                  autoFocus
                  {...register("name", { required: "name is required*" })}
                />
                {errors.name && (
                  <p className="text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 text-lg text-gray-500">
                <label htmlFor="">Email Address</label>
                <input
                  className="border rounded px-4 xl:w-75 outline-gray-300 py-1 border-gray-300"
                  placeholder="Enter your Email"
                  type="text"
                  {...register("email", { required:"email is required",
                    pattern: {
                      value: /^[^\s@]+@[^s@]+\.[^\s@]+$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col xl:text-lg text-gray-500 itemc">
                <div className="flex w-full justify-between items-center">
                  <label htmlFor="">Password</label>
                  <label
                    className="text-red-500 text-sm cursor-pointer"
                    htmlFor=""
                  >
                    Forget password
                  </label>
                </div>
                <input
                  className="border rounded px-4 xl:w-75 outline-gray-300 py-1 border-gray-300"
                  placeholder="Enter your age"
                  type="text" {...register("password" ,{
                  required:"password is required",
                    pattern: {value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, message:"please enter a solid password"}
                  } )}
                  
                  
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              <div className="flex flex-col gap-2 text-lg text-gray-500">
                <label htmlFor="">Phone number</label>
                <input
                  className="border rounded px-4 xl:w-75 py-1 outline-gray-300 border-gray-300"
                  placeholder="Enter your number"
                  type="number" {...register("number", {
                    required:"phone number is required",
                    pattern:{
                      value:/^\+?[1-9][0-9]{7,14}$/,
                      message:"please enter valid number"
                    }
                  })}
                />
                {errors.number && <p className="text-red-500">{errors.number.message}</p>}
              </div>

              <button
                type="submit"
                className="px-4 py-2 xl:w-70 text-xl border rounded-lg cursor-pointer hover:bg-green-600 bg-green-500 text-white"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
