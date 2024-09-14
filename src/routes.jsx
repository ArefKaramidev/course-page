import About from "./pages/about/about";
import Articles from "./pages/Articles/Articles";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import PrivateRoute from "./PrivateRout";

const router = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/articles",
    element: <Articles />,
    children: [
      { path: "php", element: <h1>php articles</h1> },
      { path: "js", element: <h1>js articles</h1> },
      { path: "react", element: <h1>react articles</h1> },
    ],
  },
  { path: "/course/:courseId", element: <Course /> },
  { path: "login", element: <Login /> },
  { path: "blog", element: <Blog /> },
  {
    path: "panel",
    element: (
      <PrivateRoute>
        <Panel />
      </PrivateRoute>
    ),
  },
];

export default router;
