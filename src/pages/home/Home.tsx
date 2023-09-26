import {
  CheckCircleOutlined,
  CommentOutlined,
  CreditCardOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import "./Home.css";
import CategoryCard from "../../components/category/CategoryCard";
import { FloatButton } from "antd";
import { products } from "../allProducts/AllProducts";
import ProductCard from "../../components/productCard/ProductCard";

export const Categories = [
  {
    id: 1,
    title: "Earring",
    collectionItems: 146,
    imageUrl:
      "https://starjewellery.in/cdn/shop/files/Earring.webp?v=1670567476",
  },
  {
    id: 2,
    title: "Ring",
    collectionItems: 146,
    imageUrl:
      "https://starjewellery.in/cdn/shop/files/10_1800x1800_04488dd1-be45-4d66-b2c5-bc4dd7ff7343.webp?v=1670567466",
  },
  {
    id: 3,
    title: "Necklace",
    collectionItems: 146,
    imageUrl:
      "https://starjewellery.in/cdn/shop/files/necklace.webp?v=1670567431",
  },
  {
    id: 4,
    title: "Choker",
    collectionItems: 146,
    imageUrl:
      "https://starjewellery.in/cdn/shop/files/choker_2.jpg?v=1670567448",
  },
  {
    id: 5,
    title: "Bracelet",
    collectionItems: 146,
    imageUrl:
      "https://starjewellery.in/cdn/shop/files/990011087-2_2_256x256_e54eaedc-406d-4f41-8b59-dab1c0d07e30.webp?v=1670567457",
  },
];

const Home = () => {
  return (
    <>
      <div>
        <CustomCarousel />
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row sm:min-h-[200px] sm:items-center">
        <div className="w-full sm:w-1/4 h-full flex p-4 sm:justify-center">
          <div className="w-12 h-12 flex justify-center items-center ">
            <CheckCircleOutlined />
          </div>
          <div className=" flex flex-col justify-start items-start pl-2 ">
            <p className="font-bold">Free Shipping</p>
            <p>All Over India</p>
          </div>
        </div>
        <div className="w-full sm:w-1/4 h-full flex p-4 sm:justify-center">
          <div className="w-12 h-12 flex justify-center items-center ">
            <CommentOutlined />
          </div>
          <div className=" flex flex-col justify-start items-start pl-2 ">
            <p className="font-bold">Online Support</p>
            <p>24/7 Anytime</p>
          </div>
        </div>
        <div className="w-full sm:w-1/4 h-full flex p-4 sm:justify-center">
          <div className="w-12 h-12 flex justify-center items-center ">
            <RedoOutlined />
          </div>
          <div className=" flex flex-col justify-start items-start pl-2 ">
            <p className="font-bold">30 Days Easy Return</p>
            <p>Money Back Guarantee</p>
          </div>
        </div>
        <div className="w-full sm:w-1/4 h-full flex p-4 sm:justify-center">
          <div className="w-12 h-12 flex justify-center items-center ">
            <CreditCardOutlined />
          </div>
          <div className=" flex flex-col justify-start items-start pl-2 ">
            <p className="font-bold">Cash On Delivery</p>
            <p>On all Products</p>
          </div>
        </div>
      </div>
      <div>
        <div className="p-2">
          <h2 className="p-2 font-bold text-2xl">Our Collection</h2>
          <div className="w-full h-full flex justify-start overflow-x-scroll no-scrollbar">
            {Categories.map((category) => (
              <CategoryCard data={category} key={category.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2 className="p-2 font-bold text-2xl">Latest in Store</h2>
        <div className="flex flex-wrap justify-around items-start mt-4 lg:justify-start">
          <FloatButton.BackTop />
          {products.map((product) => (
            <a href={`allproducts/${product.id}`}>
              <ProductCard variant={1} data={product} key={product.id} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
