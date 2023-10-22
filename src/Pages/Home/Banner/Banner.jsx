import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel h-[600px] w-full rounded-xl my-5">
        {/* slide-1  */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
            <div className="text-white w-1/2 pl-8 space-y-7 md:pl-20">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-[#FF3811] hover:bg-[#50C1EC] mr-5">
                Discover More
              </button>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] ">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 gap-5 right-12 ">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle  bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide-2  */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
            <div className="text-white w-1/2 pl-8 space-y-7 md:pl-20">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-[#FF3811] hover:bg-[#50C1EC] mr-5">
                Discover More
              </button>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] ">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 gap-5 right-12">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle  bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide-3  */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
            <div className="text-white w-1/2 pl-8 space-y-7 md:pl-20">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-[#FF3811] hover:bg-[#50C1EC] mr-5">
                Discover More
              </button>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] ">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 gap-5 right-12">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle  bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide-4  */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
            <div className="text-white w-1/2 pl-8 space-y-7 md:pl-20">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-[#FF3811] hover:bg-[#50C1EC] mr-5">
                Discover More
              </button>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] ">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 gap-5 right-12">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle  bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide-5  */}
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
            <div className="text-white w-1/2 pl-8 space-y-7 md:pl-20">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-[#FF3811] hover:bg-[#50C1EC] mr-5">
                Discover More
              </button>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] ">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 gap-5 right-12">
            <a href="#slide4" className="btn btn-circle ">
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle  bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide-6  */}
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
            <div className="text-white w-1/2 pl-8 space-y-7 md:pl-20">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-[#FF3811] hover:bg-[#50C1EC] mr-5">
                Discover More
              </button>
              <button className="text-lg font-semibold px-4 py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] ">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 gap-5 right-12">
            <a href="#slide5" className="btn btn-circle ">
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
