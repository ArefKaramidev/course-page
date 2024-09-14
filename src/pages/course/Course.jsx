import { useParams } from "react-router-dom";
import { courseData } from "../../constants/courseData";
import Navbar from "../../components/Navbar";
const Course = () => {
  const param = useParams();
  const product = courseData.find((item) => param.courseId == item.id);

  return (
    <>
      <Navbar />;
      <div className="flex items-center justify-evenly mt-28 flex-wrap p-2">
        <img
          src={product.Image}
          alt=""
          className="w-[30rem] h-[20rem] object-cover mb-4"
        />
        <div>
          <span className="text-lg font-medium">
            Course Name : {product.title}
          </span>
          <p>{product.des}</p>
        </div>
      </div>
    </>
  );
};

export default Course;
