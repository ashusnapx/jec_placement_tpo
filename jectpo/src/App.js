import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Placements from "./components/Placements";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import PrincipleAddress from "./components/PrincipleAddress";
import TrainingPlacement from "./components/TrainingPlacement";
import Platinum from "./components/Platinum";
import Academic from "./components/Academic";
import Major from "./components/Major";
import Faculty from "./components/Faculty";
import Home from "./components/Home";



function App() {
  return (
    <div className="font-sans">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

const appRouter = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/placements",
        element: <Placements/>
      },
      {
        path: "/principles-address",
        element: <PrincipleAddress/>
      },
      {
        path: "/training-placement",
        element: <TrainingPlacement/>
      },
      {
        path: "/platinum-jubilee",
        element: <Platinum/>
      },
      {
        path: "/academic-programs",
        element: <Academic/>
      },
      {
        path: "/faculty-students",
        element: <Faculty/>
      },
      {
        path: "/research-development"
      },
      {
        path: "/major-recruiters",
        element: <Major/>
      },
    ]
  },
])

export default appRouter;
