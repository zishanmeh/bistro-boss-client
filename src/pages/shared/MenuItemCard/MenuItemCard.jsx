const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-[120px] rounded-r-[200px] rounded-b-[200px] "
        src={image}
        alt={`image of ${name}`}
      />
      <div>
        <div className="flex justify-between items-center">
          <h3 className="uppercase">{name}---------</h3>
          <p className="text-yellow-600">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
