import { useState } from "react";
import Navbar from "../../components/Navbar";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = () => {
    if (userName == "admin" && password == 1234) {
      Swal.fire({
        title: "Login successfully",
        text: "Login successfully",
        icon: "success",
      });
      document.cookie =
        "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
      navigate("/panel");
    } else {
      Swal.fire({
        title: "Error!",
        text: "UserName Or Password Incorrect",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className=" mt-32 my-0 text-center">
        <form
          action=""
          className="p-4 bg-white shadow-md inline-block rounded-md"
        >
          <div className="mb-4">
            <label className="inline-block w-32">User Name : </label>
            <input
              type="text"
              required
              className="px-4 py-2 placeholder:user name ... border rounded-md"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="inline-block w-32">Password : </label>
            <input
              type="password"
              required
              className="px-4 py-2 placeholder:password ... border rounded-md"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="py-2 border-none bg-sky-300 rounded-md px-4"
              onClick={submit}
            >
              LogIn
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
