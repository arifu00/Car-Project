import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero h-[600px]">
        <div className="hero-content flex-col lg:flex-row lg:gap-12">
          <div className="relative lg:w-1/2">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="absolute top-1/2 right-5 border-8 border-white w-1/2 rounded-lg "
            />
          </div>
          <div className="lg:w-1/2 p-6 space-y-5">
            <h5 className="text-lg font-bold text-[#FF3811]">About Us</h5>
            <h1 className="text-3xl md:text-5xl text-[#151515] font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className=" text-base font-normal text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className=" text-base font-normal text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="text-white text-lg font-semibold bg-[#FF3811] hover:bg-[#50C1EC] hover:text-black px-4 py-3 rounded-lg">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
