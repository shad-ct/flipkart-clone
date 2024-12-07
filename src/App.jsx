import Nav1 from "./components/nav1";
import Nav2 from "./components/nav2";
import Slides from "./components/slides";
import FashionBest from "./components/FashionBest";
import Footer from "./components/Footer";

import 'tailwindcss/tailwind.css';
import './index.css';

const MyComponent = () => {
  return (
    <>
      <Nav1 />
      <Nav2 />
      <Slides />
      <FashionBest />
      <FashionBest />
      <FashionBest />
      <Footer />
    </>
  );
};

export default MyComponent;