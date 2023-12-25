import {
  CheckCircleOutlined,
  CommentOutlined,
  CreditCardOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import "./Home.css";
import CategoryCard from "../../components/category/CategoryCard";
import { FloatButton } from "antd";
import { products } from "../allProducts/AllProducts";
import ProductCard from "../../components/productCard/ProductCard";
import Hero from "../../components/hero/Hero";

export const Categories = [
  {
    id: 1,
    title: "Earring",
    collectionItems: 146,
    imageUrl:
      "https://images.unsplash.com/photo-1610214054205-7595cba9cd23?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Ring",
    collectionItems: 146,
    imageUrl:
      "https://images.unsplash.com/photo-1627293530222-0df384f8a419?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Necklace",
    collectionItems: 146,
    imageUrl:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Choker",
    collectionItems: 146,
    imageUrl:
      "https://images.unsplash.com/photo-1673283630723-05bf038ec0a8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Bracelet",
    collectionItems: 146,
    imageUrl:
      "https://images.unsplash.com/photo-1611235115922-72aece5cf686?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <>
      {/* <div>
        <CustomCarousel />
      </div> */}
      <Hero />
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
