const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-yellow-600 text-center">{subHeading}</p>
      <h3 className="text-3xl uppercase text-center">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
