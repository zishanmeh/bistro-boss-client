const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card bg-base-100 shadow-xl p-0">
      <figure className="relative">
        <img src={image} alt={`image of ${name}`} />
        <p className="absolute bg-gray-900 text-white px-3 py-2 text-sm rounded-lg top-4 right-6">
          ${price}
        </p>
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-center mx-auto">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-neutral mt-3 border-orange-400">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
