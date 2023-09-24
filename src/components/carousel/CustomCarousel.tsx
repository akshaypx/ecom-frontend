import { Carousel } from "antd";

const CustomCarousel = () => {
  return (
    <Carousel autoplay>
      <div className="w-full h-[600px] text-white bg-[url(https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-center bg-cover bg-opacity-80 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="p-4 text-2xl font-extrabold backdrop-blur-xl rounded-xl">
            Silver Oxidized Jwellery
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] text-white bg-[url(https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)] bg-center bg-cover bg-opacity-80 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="p-4 text-2xl font-extrabold backdrop-blur-xl rounded-xl">
            Pre Built Sets
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] text-white bg-[url(https://images.unsplash.com/photo-1667419942023-accb4846ddb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)] bg-center bg-cover bg-opacity-80 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="p-4 text-2xl font-extrabold backdrop-blur-xl rounded-xl">
            Beads Inventory
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] text-white bg-[url(https://images.unsplash.com/photo-1667420892464-3b43832afce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-center bg-cover bg-opacity-80 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="p-4 text-2xl font-extrabold backdrop-blur-xl rounded-xl">
            My Collection
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
