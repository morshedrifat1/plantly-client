import { use, useEffect, useState } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import { Slide, toast } from "react-toastify";
import logo from "../assets/logo.PNG";
import darkLogo from "../assets/logoDark.png";
import userImg from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { user, userSignout } = use(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const [logoutShow,setLogoutShow] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);
  const handleSignOut = () => {
    userSignout()
      .then(() => {
        toast.success("Signout successful ", {
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
    <div>
      <div className="navbar  max-w-[1420px] rounded-lg mx-auto px-5 h-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              <li>
                <div className="avatar space-x-2 py-2.5">
                  <div className="ring-btn ring-offset-base-100 w-8 h-8 rounded-full ring-1 ring-offset-2">
                    <img src={user ? user?.photoURL : userImg} />
                  </div>
                  <NavLink className="text-base font-medium">
                    My Profile
                  </NavLink>
                </div>
              </li>
              <li className="text-base font-medium">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-base font-medium">
                <NavLink to={"/explore-gardeners"}>Explore Gardeners</NavLink>
              </li>
              <li className="text-base font-medium">
                <NavLink to={"/tips"}>Browse Tips</NavLink>
              </li>
              <li className="text-base font-medium">
                <NavLink to={"/share-tips"}>Share a Garden Tips</NavLink>
              </li>
              <li className="text-base font-medium">
                <NavLink to={"/my-tips"}>My Tips</NavLink>
              </li>
              <li>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none px-5 sm:px-10 flex items-center"
                  >
                    <CiLogout size={22} /> Logout
                  </button>
                ) : (
                  <Link
                    className="btn bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none px-5 sm:px-10 flex items-center"
                    to={"/auth/login"}
                  >
                    Login
                    <CiLogin size={22} />
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img className="w-40" src={darkMode ? darkLogo : logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="flex gap-3">
            <li className="text-base font-medium ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-black dark:border-white dark:border-white"
                    : "hover:border-b-2 p-1 border-black dark:border-white"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-black dark:border-white dark:border-white"
                    : "hover:border-b-2 p-1 border-black dark:border-white"
                }
                to={"/explore-gardeners"}
              >
                Explore Gardeners
              </NavLink>
            </li>
            <li className="text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-black dark:border-white dark:border-white"
                    : "hover:border-b-2 p-1 border-black dark:border-white"
                }
                to={"/tips"}
              >
                Browse Tips
              </NavLink>
            </li>
            <li className="text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-black dark:border-white dark:border-white"
                    : "hover:border-b-2 p-1 border-black dark:border-white"
                }
                to={"/share-tips"}
              >
                Share a Garden Tips
              </NavLink>
            </li>
            <li className="text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-black dark:border-white dark:border-white"
                    : "hover:border-b-2 p-1 border-black dark:border-white"
                }
                to={"/my-tips"}
              >
                My Tips
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-5 relative">
          {user && (
            <div  onClick={()=>setLogoutShow(!logoutShow)} className=" lg:flex  flex-col hidden">
              <div className="group ">
                <img
                className="hidden sm:inline ring-btn w-10 h-10 rounded-full ring-1 ring-offset-3 cursor-pointer bg-[#f5f8fb]"
                src={user?.photoURL ? user?.photoURL : userImg}
              />
              <p className="absolute top-13 right-12 z-10 bg-black text-white text-base px-5 rounded-full hidden group-hover:inline">
                {user?.displayName}
              </p>
              </div>
              <div className={`absolute top-17 right-11 p-3 bg-white shadow rounded-lg ${logoutShow?'inline':'hidden'}`}>
                <button
                  onClick={handleSignOut}
                  className="btn bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none px-5 sm:px-6 sm:flex items-center hidden"
                >
                  <CiLogout size={22} /> Logout
                </button>
              </div>
            </div>
          )}
          <div>
            <label className="flex cursor-pointer gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                className="toggle theme-controller border border-black dark:border-gray-100"
                onClick={toggleDarkMode}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {!user && <Link
              className="btn bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none px-5 sm:px-10 sm:flex items-center hidden"
              to={"/auth/login"}
            >
              Login
              <CiLogin size={22} />
            </Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
