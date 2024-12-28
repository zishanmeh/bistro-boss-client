import Banner from "../Banner/Banner";
import Categroy from "../Category/Categroy";
import Featured from "../Featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categroy></Categroy>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
