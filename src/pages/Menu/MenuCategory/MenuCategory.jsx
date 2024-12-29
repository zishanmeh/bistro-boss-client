import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItemCard from "../../shared/MenuItemCard/MenuItemCard";

const MenuCategory = ({ items, title, bgImg, dish }) => {
  return (
    <div className="my-16">
      {title && <Cover bgImg={bgImg} title={title}></Cover>}
      <div
        className={`grid grid-cols-1 md:grid-cols-2  gap-10 ${
          title && "mt-10"
        }`}
      >
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={`/order/${dish}`}
          className="btn btn-outline border-0 border-b-4 border-neutral mt-3"
        >
          Order your favourite food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
