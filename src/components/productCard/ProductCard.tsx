const ProductCard = () => {
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