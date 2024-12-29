import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItemCard from "../../shared/MenuItemCard/MenuItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-16">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {popular.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 border-neutral mt-3">
          View full menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
