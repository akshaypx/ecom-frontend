import { ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Divider } from "antd";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { products } from "../allProducts/AllProducts";
import CustomButton from "../../components/button/CustomButton";

const Details = () => {
  const { id } = useParams();
  const productData = {
    id: 1,
    title: "Antique Rhodes Designer Hoops Antique Rhodes",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_1024x1024_14a35ff8-6c00-4b4e-aef5-1d4f8b151210.jpg?v=1670567427",
  };
  console.log(id);
  return (
    <div className="sm:flex sm:justify-center">
      <div className="w-full h-full sm:max-w-[1000px]">
        <div className="w-full p-4">
          <Breadcrumb
            className="px-4"
            items={[
              {
                title: <a href="/">Home</a>,
              },
              {
                title: <a href="/allproducts">Shop</a>,
              },
              {
                title: productData.title,
              },
            ]}
          />
        </div>
        <div className="sm:flex sm:justify-center sm:items-start">
          <div className="w-full sm:w-[50%] sm:max-w-[500px] sm:max-h-[600px] sm:overflow-hidden flex justify-center">
            <div className="w-[80%] h-full flex justify-center items-center">
              <img className="object-cover" src={productData.imageUrl} alt="" />
            </div>
          </div>
          <div className="sm:p-4 sm:pt-0 sm:w-[50%] sm:max-w-[600px] sm:flex sm:flex-col sm:justify-start sm:items-start">
            <div className="text-xl m-4 sm:mt-0 p-2 sm:pt-0 font-bold">
              {productData.title}
            </div>
            <div className="text-xl m-4 px-2 font-semibold">
              Rs. {productData.price}{" "}
              <span className="line-through font-normal">
                Rs. {productData.previousPrice}
              </span>
              <p className="font-light text-sm">Tax Included.</p>
            </div>
            <div className="px-4 py-2 w-full">
              <CustomButton
                type="default"
                className="font-bold w-full p-2 h-full text-xl flex justify-center items-center"
                onClick={() => {}}
              >
                Add to Cart <ShoppingCartOutlined />
              </CustomButton>
            </div>
            <div className="px-4 py-2 w-full">
              <CustomButton
                type="primary"
                className="font-bold w-full p-2 h-full text-xl flex justify-center items-center"
                onClick={() => {}}
              >
                Buy Now <ShoppingCartOutlined />
              </CustomButton>
            </div>
          </div>
        </div>
        <Divider />
        <div className="px-4 sm:max-w-[600px]">
          <h2 className="text-lg font-bold pb-4">Product Description</h2>
          <p>
            Product description : Gold Plated Guttaspusalu Long Haram
            Handcrafted with Tints of Gold Temple and Pearl Work Design Comes
            With a Matching Pair of Earrings and Embossed with intricacies of
            Ruby Stone Work.
          </p>
          <br />
          <br />
          <p>
            NECKLACE - Handcrafted with Guttaspusalu Gold Tone 4 Layered Line
            Long Haram In Traditional Temple Work Design To Add Uniqueness and
            Heritage Look to the Piece and Elegancy of Traditionally Crafted
            Pearl Work and Ruby Stones.
          </p>
          <br />
          <br />
          <p>
            EARRINGS - Detailed Gold polish Engraved Pearl Work In your Earrings
            with Tint of Gold Work.
          </p>
          <br />
          <br />
          <p>
            Authentic intricacies of South Indian temple work now in your Haram.{" "}
          </p>
        </div>
        <Divider />
        <div className="px-4">
          <h2 className="text-lg font-bold pb-4">Shipping and Return</h2>
          <p className="py-4">Quality Passed Certified Products</p>
          <p className="py-4">FREE SHIPPING All Over India</p>
          <p className="py-4">30 Days Return Policy</p>
        </div>
        <Divider />
        <div className="p-2">
          <h2 className="p-2 font-bold text-xl">You Might Also Like</h2>
          <div className="w-full h-full flex justify-start overflow-x-scroll">
            {products.map((product) => (
              <ProductCard data={product} variant={1} key={product.id} />
            ))}
          </div>
        </div>
        <Divider />
        <div className="p-2">
          <h2 className="p-2 font-bold text-xl">Recently Viewed</h2>
          <div className="w-full h-full flex justify-start overflow-x-scroll">
            {products.map((product) => (
              <ProductCard data={product} variant={1} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
