import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const handleSignout = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/signout");
      dispatch(signOut())
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="px-2 md:px-20 py-2 border-b shadow-sm">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hover:text-fuchsia-700 transition-all">
            Auth App{" "}
            <span className="bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-fuchsia-800 px-3 py-2 rounded-lg text-white transition-all">
              MERN
            </span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link
            to="/"
            className="text-xl hover:underline underline-offset-4 hover:text-fuchsia-700 transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl hover:underline underline-offset-4 hover:text-fuchsia-700 transition-all"
          >
            About
          </Link>
          {currentUser ? (
            <>
              <Link
                to="/profile"
                className="text-xl hover:underline underline-offset-4 hover:text-fuchsia-700 transition-all"
              >
                {currentUser.username}
              </Link>
              <span
                onClick={handleSignout}
                className="text-xl hover:text-fuchsia-100 transition-all bg-gradient-to-r from-pink-500 to-fuchsia-700 px-2 py-1 text-white rounded-lg cursor-pointer"
              >
                SignOut
              </span>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="text-xl hover:underline underline-offset-4 hover:text-fuchsia-700 transition-all"
            >
              Sign In
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
