import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessetBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover bgImg={menuBg} title={"Our menu"}></Cover>
      <SectionTitle
        heading={"Today's offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offered} dish={"offered"}></MenuCategory>
      {/* Dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"Dessert's"}
        dish={"dessert"}
        bgImg={dessetBg}
      ></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"Pizza's"}
        dish={"pizza"}
        bgImg={pizzaBg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={"Salad's"}
        dish={"salad"}
        bgImg={saladBg}
      ></MenuCategory>
      {/* Soup menu items */}
      <MenuCategory items={soup} title={"Soup's"} bgImg={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
