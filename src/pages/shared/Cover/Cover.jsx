import { Parallax } from "react-parallax";
const Cover = ({ bgImg, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bgImg}
      bgImageAlt={title}
      strength={-200}
    >
      <div
        className="hero h-[700px]"
        // style={{
        //   backgroundImage: `url("${bgImg}")`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
