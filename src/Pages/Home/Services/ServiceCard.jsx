import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
      <div className="card border border-[#E8E8E8] mt-12">
        <figure className="px-5 pt-5">
          <img src={img} alt={title} className="rounded-xl w-full h-[205px]" />
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-bold text-[#444]">{title}</h2>
          <div className="flex items-center justify-between text-[#FF3811] text-xl font-semibold">
            <h5 className="">Price: ${price}</h5>
            <h5><AiOutlineArrowRight></AiOutlineArrowRight></h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
