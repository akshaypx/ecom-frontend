import "./ProductCard.css";

interface ProductCardProps {
  variant: number;
}

const ProductCard = ({ variant }: ProductCardProps) => {
  if (variant === 1) {
    return (
      <div className="w-36 h-72 lg:w-48 lg:h-72 m-1 mb-2 lg:m-4 lg:mb-8">
        <div className="w-36 h-48 lg:w-48 lg:h-56 overflow-hidden flex justify-center items-center aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1690474086641-b81f793cb234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
            alt="Image"
            className="object-cover object-center align-middle"
          />
        </div>
        <div className="font-bold mt-1">Antique Rhodes Designer Hoops</div>
        <div>
          Rs. 3999{" "}
          <span className="line-through text-gray-500 text-sm">Rs. 5999</span>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-4xl bg-gray-200 rounded-md flex overflow-hidden">
      <div className="w-28 min-h-full lg:w-48 lg:h-48">
        <img
          src="https://m.media-amazon.com/images/S/aplus-media/vc/d143b340-a233-44a8-8e94-2c53ac46d8c6._CR0,0,716,716_PT0_SX300__.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/4 lg:w-3/5 flex flex-col justify-between items-start p-2 overflow-hidden">
        <p className="font-bold max-w-fit truncate">
          Logitech G304 Lightspeed Wireless Gaming Mouse, Hero Sensor, 12,000
          DPI, Lightweight, 6 Programmable Buttons, 250h Battery Life, On-Board
          Memory, Compatible with PC/Mac - Black
        </p>
        <p className="text-sm">4.5 ⭐⭐⭐⭐ (5.9K+)</p>
        <div className="text-sm flex items-center">
          <p className="bg-red-700 max-w-fit text-white text-xs p-1 rounded-sm">
            21% off
          </p>
          <p className="font-bold max-w-fit text-red-700 p-2">Deal</p>
        </div>
        <div className="flex items-end">
          <span className="text-2xl font-bold">$2,995</span>
          <span className="line-through mx-1">MRP:$3795</span>
        </div>
        <div>Free Delivery</div>
      </div>
      <div className="hidden lg:visible w-32 lg:flex flex-col justify-evenly">
        <button className="bg-orange-300 px-4 py-2 rounded-md hover:bg-orange-500">
          Buy Now
        </button>
        <button className="bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <Card
      hoverable
      className="w-48 h-72 bg-gray-300"

      cover={
        <div className="h-48 overflow-hidden">
          <img
            className="relative "
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </div>
      }
    >
      <div className="w-full h-full flex flex-col justify-around items-center">
        <p className="font-bold">New Product</p>
        <Button
          className="text-white bg-blue-400 hover:bg-blue-800"
          type="primary"
        >
          Add to Cart
        </Button>
      </div>
    </Card> */
}
