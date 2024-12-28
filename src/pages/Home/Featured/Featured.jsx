import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featuredItem bg-fixed text-white pt-8 my-16">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 gap-10 bg-gray-700 bg-opacity-40">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <h5 className="uppercase">WHERE CAN I GET SOME?</h5>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-white text-white btn-neutral">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
