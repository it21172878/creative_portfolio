import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className=" pt-16 pb-16">
      <h1 className=" text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Colleborate with brand <br /> and agancies to create <br /> impactful
        results
      </h1>
      <div className=" w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div>
          <ServiceCard
            icon="/images/s1.png"
            name="UI and UX"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/s2.png"
            name="UI and UX"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/s3.png"
            name="UI and UX"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/s4.png"
            name="UI and UX"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
