import { Link } from "react-router-dom";
import { courseData } from "../constants/courseData";

const Courses = () => {
  return (
    <>
      <span className="font-medium text-2xl px-5">Training courses</span>
      <div className="flex items-center justify-around mt-10 flex-wrap">
        {courseData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-around mb-20"
            >
              <div
                key={item.id}
                className="w-72 h-80 bg-white border rounded-tl-xl rounded-tr-xl"
              >
                <img
                  src={item.Image}
                  alt=""
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <span className="font-normal my-4 inline-block ml-4">
                  {item.des}
                </span>
                <Link
                  to={`/course/${item.id}`}
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md ml-4"
                >
                  Buy Course
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
