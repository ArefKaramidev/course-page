import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Articles = () => {
  return (
    <>
      <Navbar />
      <div className="mt-32 text-center">
        <h1 className="border-b-2 font-medium text-3xl">Articles Page</h1>
      </div>
      <div className="text-center mt-10">
        <Link
          className="p-2 text-blue-500 border border-black rounded-md mr-4 "
          to="php"
        >
          php article
        </Link>
        <Link
          className="p-2 text-blue-500 border border-black rounded-md mr-4 "
          to="js"
        >
          js article
        </Link>
        <Link
          className="p-2 text-blue-500 border border-black rounded-md mr-4 "
          to="react"
        >
          react article
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Articles;
