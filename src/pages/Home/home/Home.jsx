import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Categroy from "../Category/Categroy";
import Featured from "../Featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categroy></Categroy>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
