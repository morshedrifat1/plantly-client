import React, { use, useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import { toast,Slide } from "react-toastify";
import icon from "../assets/icon.png";
import { Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user,userSignup, userGoogleSignIn } = use(AuthContext);
    const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // field validation
    if(!name){
      toast.error("Enter Your Name", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        return;
    }
    if(!imgUrl){
      toast.error("Enter Your Photo URL", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        return;
    }
    if(!email){
      toast.error("Enter a email address", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        return;
    }
    if(!password){
      toast.error("Use a strong password", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        return;
    }
    // password validation
    const passNumber = /(?=.*\d)/;
    const passUppercase = /(?=.*[A-Z])/;
    const passLowercase = /(?=.*[a-z])/;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      return;
    }
    if (!passNumber.test(password)) {
      toast.error("Password must include at least one number.", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      return;
    }
    if (!passUppercase.test(password)) {
      toast.error("Must have an Uppercase letter in the password ", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      return;
    }
    if (!passLowercase.test(password)) {
      toast.error("Must have a Lowercase letter in the password", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      return;
    }
    if (!specialCharacter.test(password)) {
      toast.error("Password must include at least one special character", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      return;
    }
    userSignup(email, password)
      .then(() => {
        toast.success("Registration successful ", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        e.target.reset()

      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      });
  };
  const handleSignInWithGoogle = () => {
    userGoogleSignIn()
      .then(() => {
        toast.success("Login successful ", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      });
  };
  return (
    <div className="hero bg-base-200 rounded-lg min-h-screen mb-10 flex flex-col items-center justify-center px-5 py-10 dark:bg-[#0f172a]">
      <Helmet>
        <title>Plantly | SignUp</title>
      </Helmet>
      <div className="space-y-4">
        <img className="w-18 mx-auto" src={icon} alt="" />
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-600 dark:text-[#e2e8f0]">
          Create your account
        </h1>
        <p className="text-base font-medium text-center text-gray-500 dark:text-[#94a3b8]">
          Please enter your details to Register.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-lg shadow-2xl mt-5 dark:bg-[#0b1120]">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label text-sm font-normal">Name</label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 py-2 px-2 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0"
              placeholder="Name"
            />
            <label className="label text-sm font-normal mt-1.5">Photo Url</label>
            <input
              type="text"
              name="imgUrl"
              className="border border-gray-300 py-2 px-2 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0" 
              placeholder="User Image url"
            />
            <label className="label text-sm font-normal mt-1.5">Email</label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 py-2 px-2 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0"
              placeholder="Email"
            />
            <label className="label text-sm font-normal mt-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="border border-gray-300 py-2 px-2 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0"
                placeholder="Password"
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 cursor-pointer"
              >
                {showPassword ? (
                  <MdOutlineRemoveRedEye size={20} />
                ) : (
                  <FaRegEyeSlash size={20} />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="btn text-white mt-4 shadow-none bg-gradient-to-r from-[#33622a] to-[#94b834]"
            >
              Register
            </button>
            <p className="text-base dark:text-white text-accent-content font-medium mt-3 text-center ">
              Alrady have an account !{" "}
              <Link to={"/auth/login"} className="text-[#94b834]">
                Login
              </Link>
            </p>
            <button
              type="button"
              onClick={handleSignInWithGoogle}
              className="btn bg-white text-black border-[#e5e5e5] p-0 mt-2"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
