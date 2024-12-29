import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover bgImg={menuBg} title={"Our menu"}></Cover>
    </div>
  );
};

export default Menu;
