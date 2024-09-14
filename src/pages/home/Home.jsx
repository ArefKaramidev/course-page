import Footer from "../../components/footer";
import Courses from "../../components/Courses";
import programming from "../img/programming.svg";
import Navbar from "../../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />;
      <div className="flex mb-24 items-center mt-16 p-8 flex-wrap sm:20 md:p-20 lg:p-8 lg:mt-28 xl:flex-nowrap">
        <p className="text-justify">
          <p className="text-xl  font-medium mb-4 sm:text-2xl xl:text-3xl font-Poppins">
            Programing with next one code
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam vel
          voluptas illum fugiat necessitatibus ducimusg possimus exercitationem
          vel voluptatibus, sequi recusand non id dolore officiis deserunt
          fugiat harum laudantiumk numquam accusamus soluta distinctio.
          Recusandae rerum la labore quod distinctio optio tempore autem
          reiciendis, t cupiditate architecto asperiores commodi alias doloremqu
          voluptatum! Libero vel alias numquam dignissimos tenetur reiciendis at
          voluptas, dolor ullam deleniti dicta nisil accusamus in voluptate quam
          corporis repudiandae cumque? exercitationem doloribus nobis ut
          nesciunt sed omnis ass Soluta exercitationem quasi qui repellat quia
          error a fa dolores excepturi tempore ratione pariatur omnis quae ad
          delectus, dolorem necessitatibus. Ex rerum magni liberou quo
          laudantium, officia delectus eaque nisi debitis exer pariatur
          consectetur adipisci obcaecati reprehenderit si
        </p>
        <img src={programming} alt="" className="mt-10" />
      </div>
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
