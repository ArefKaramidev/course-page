import { NavLink } from "react-router-dom";
import { links, styleActiveLinks } from "../constants/navlinks";
import { useState } from "react";
import { isLogIn } from "../utils";

const Links = () => {
  const [loginStatus, setLogin] = useState(isLogIn() ? "LogOut" : "Login");
  function logOut() {
    document.cookie =
      "username=mamad; expires=Thu, 1 8 Dec 2022 12:00:00 UTC; path=/";
  }
  console.log(loginStatus);

  return (
    <>
      {links.map((item) => {
        if (item.title == "Login") {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={logOut}
              className={({ isActive }) =>
                `${
                  isActive ? styleActiveLinks.border : null
                } block p-2 text-lg w-fit mx-auto`
              }
            >
              {loginStatus}
            </NavLink>
          );
        }
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${
                isActive ? styleActiveLinks.border : null
              } block p-2 text-lg w-fit mx-auto`
            }
          >
            {item.title}
          </NavLink>
        );
      })}
    </>
  );
};

export default Links;
