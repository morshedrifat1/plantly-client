import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Slide, toast } from 'react-toastify';
import icon from '../assets/icon.png'
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
const Login = () => {
    const {userLogin,userGoogleSignIn,passwordReset} = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        userLogin(email,password)
        .then(()=>{
            toast.success("🎉 Login successful ", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        e.target.reset();
        })
        .catch((error)=>{
            toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        })
    }
    const handleSignInWithGoogle = () =>{
        userGoogleSignIn()
        .then(()=>{
            toast.success("🎉 Login successful ", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        })
        .catch((error)=>{
            toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        })
    } 
    const handleForgatePassword =()=>{
        const email = emailRef.current.value;
        passwordReset(email)
        .then(()=>{
            toast.success("A password reset link has been sent to your email.", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        })
        .catch((error)=>{
            toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        })

    }
    return (
        <div className="hero bg-base-200 rounded-lg min-h-screen mb-10 flex flex-col items-center justify-center px-5 py-10 dark:bg-[#0f172a]">
      <div className="space-y-4">
        <img className="w-18 mx-auto" src={icon} alt="" />
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-600 dark:text-[#e2e8f0]">
          Sign In your account
        </h1>
        <p className="text-base font-medium text-center text-gray-500 dark:text-[#94a3b8]">
          Please enter your details to sign in.
        </p>
      </div>
      <div className="card bg-base-100 dark:bg-[#0b1120] w-full max-w-md shrink-0 rounded-lg shadow-2xl mt-5">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label text-sm font-normal">Email</label>
            <input
              ref={emailRef}
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
            <div onClick={handleForgatePassword} className="mt-1 text-sm font-normal text-gray-500">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn text-white mt-4 shadow-none bg-gradient-to-r from-[#33622a] to-[#94b834]"
            >
              Login
            </button>
            <p className="text-base dark:text-white text-accent-content font-medium mt-3 text-center">
              Dont’t Have An Account ?{" "}
              <Link to={"/auth/signup"} className="text-[#96bb36]">
                Sign Up
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

export default Login;