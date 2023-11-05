import CustomButton from "../button/CustomButton";
import CustomCarousel from "../carousel/CustomCarousel";

const Hero = () => {
  return (
    <div className="w-full min-h-[90vh] md:flex flex-row justify-center items-center gap-20">
      <div className="md:w-[450px] md:h-[450px]">
        <CustomCarousel />
      </div>
      <div className="md:w-1/3 h-full flex flex-col justify-center m-10 md:m-0">
        <h1 className="text-4xl font-extrabold mb-4">Latest Collection</h1>
        <p className="font-semibold text-gray-500 mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          dignissimos praesentium, cupiditate magni minus voluptates suscipit
          Lorem ipsum dolor sit amet perspiciatis!
        </p>
        <CustomButton
          onClick={() => {}}
          type="default"
          className="text-lg p-4 h-16 w-1/3"
        >
          Explore
        </CustomButton>
      </div>
    </div>
  );
};

export default Hero;
