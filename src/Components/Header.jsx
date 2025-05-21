import { Link, NavLink } from "react-router";
import logo from "../assets/logo.PNG";
import { AuthContext } from "../Context/AuthContext";
import { use } from "react";
import { Slide, toast } from "react-toastify";
import userImg from "../assets/user.png";
import { CiLogin, CiLogout } from "react-icons/ci";

const Header = () => {
  const { user, userSignout } = use(AuthContext);
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
    <div className="px-5">
      <div className="navbar  max-w-[1420px]  rounded-lg mt-7 mx-auto pr-3 sm:px-5 h-17 backdrop-blur-md backdrop-saturate-150 bg-gray-100/80">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  <div className="ring-btn ring-offset-base-100 w-8 h-8 rounded-full ring-2 ring-offset-2">
                    <img src={user ? user?.photoURL : userImg} />
                  </div>
                  <NavLink className="text-base font-medium" to={"/my-profile"}>
                    My Profile
                  </NavLink>
                </div>
              </li>
              <li className="text-base font-medium">
                <NavLink to={"/"}>Apps</NavLink>
              </li>
              <li className="text-base font-medium">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3">
            <li className="text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-btn"
                    : "hover:border-b-2 p-1 border-btn"
                }
                to={"/"}
              >
                Apps
              </NavLink>
            </li>
            <li className="text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-btn"
                    : " hover:border-b-2 p-1 border-btn"
                }
                to={"/my-profile"}
              >
                My Profile
              </NavLink>
            </li>
            <li className="text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 p-1 border-btn"
                    : " hover:border-b-2 p-1 border-btn"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-5 relative">
          <NavLink to={"/my-profile"}>
            <div className="group flex flex-col">
              <img
                className="hidden sm:inline ring-btn ring-offset-base-100 w-10 h-10 rounded-full ring-2 ring-offset-2 cursor-pointer"
                src={user?.photoURL ? user?.photoURL : userImg}
              />
              <p className="absolute top-13 z-10 bg-black text-white text-base px-3 rounded-full hidden group-hover:inline">
                {user?.displayName}
              </p>
            </div>
          </NavLink>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-btn text-white shadow-none px-7 sm:px-10 flex items-center"
            >
             <CiLogout size={22} /> Logout
            </button>
          ) : (
            <Link
              className="btn bg-btn text-white shadow-none px-7 sm:px-10 flex items-center"
              to={"/auth/login"}
            >
              Login<CiLogin size={22} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
