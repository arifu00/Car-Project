import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="my-12 lg:my-20">
      <div className="text-center space-y-6">
        <h5 className="text-xl font-bold text-[#FF3811]">About Us</h5>
        <h1 className="text-3xl md:text-5xl text-[#151515] font-bold">
        Our Service Area
        </h1>
        <p className=" text-base font-normal text-[#737373]">
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
      <div className="text-center mt-12">
        <button className="text-[#FF3811] text-lg font-semibold outline outline-[#FF3811] px-4 py-3 rounded-md">More Services</button>
      </div>
    </div>
  );
};

export default Services;
