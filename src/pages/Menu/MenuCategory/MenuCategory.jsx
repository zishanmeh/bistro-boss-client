import Cover from "../../shared/Cover/Cover";
import MenuItemCard from "../../shared/MenuItemCard/MenuItemCard";

const MenuCategory = ({ items, title, bgImg }) => {
  return (
    <div>
      {title && <Cover bgImg={bgImg} title={title}></Cover>}
      <div className={`grid grid-cols-1 md:grid-cols-2  gap-10 my-16`}>
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
