import {
  Breadcrumb,
  Button,
  Divider,
  Dropdown,
  FloatButton,
  MenuProps,
  Radio,
  RadioChangeEvent,
} from "antd";
import ProductCard from "../../components/productCard/ProductCard";
import { useEffect, useState } from "react";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Price High to Low
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Price Low to High
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Popularity
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Rating
      </a>
    ),
  },
];

const products = [
  {
    id: 1,
    title: "Antique Rhodes Designer Hoops",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_1024x1024_14a35ff8-6c00-4b4e-aef5-1d4f8b151210.jpg?v=1670567427",
  },
  {
    id: 2,
    title: "Alluring Crystal Bracelet",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_large_44e127ba-0018-455c-b01f-ef583443e958.jpg?v=1670567506",
  },
  {
    id: 3,
    title: "Gold Plated Zircon Stone Necklace Set",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/zircon-necklace-ruby-green-gold-zircon-necklace-139121-31411111264412.jpg?v=1670566057",
  },
  {
    id: 4,
    title: "Flower Designed Necklace with Earrings",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_1024x1024_7223089e-5e83-44a8-a558-812dddefb52c.jpg?v=1670567055",
  },
  {
    id: 5,
    title: "Gold Plated Zircon Stone Adjustable Chain Choker Set",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/zircon-necklace-zircon-necklace-136318-29303913087132.jpg?v=1670566062",
  },
  {
    id: 6,
    title: "Antique Rhodes Designer Hoops",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_1024x1024_14a35ff8-6c00-4b4e-aef5-1d4f8b151210.jpg?v=1670567427",
  },
  {
    id: 7,
    title: "Antique Rhodes Designer Hoops",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_1024x1024_14a35ff8-6c00-4b4e-aef5-1d4f8b151210.jpg?v=1670567427",
  },
  {
    id: 8,
    title: "Alluring Crystal Bracelet",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_large_44e127ba-0018-455c-b01f-ef583443e958.jpg?v=1670567506",
  },
  {
    id: 9,
    title: "Gold Plated Zircon Stone Necklace Set",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/zircon-necklace-ruby-green-gold-zircon-necklace-139121-31411111264412.jpg?v=1670566057",
  },
  {
    id: 10,
    title: "Flower Designed Necklace with Earrings",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_1024x1024_7223089e-5e83-44a8-a558-812dddefb52c.jpg?v=1670567055",
  },
  {
    id: 11,
    title: "Gold Plated Zircon Stone Adjustable Chain Choker Set",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/zircon-necklace-zircon-necklace-136318-29303913087132.jpg?v=1670566062",
  },
  {
    id: 12,
    title: "Antique Rhodes Designer Hoops",
    price: 3999,
    previousPrice: 5999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0688/7142/2231/products/image_1024x1024_14a35ff8-6c00-4b4e-aef5-1d4f8b151210.jpg?v=1670567427",
  },
];

const AllProducts = () => {
  const [value, setValue] = useState(1);
  const [layoutStyle, setLayoutStyle] = useState(1);

  useEffect(() => {
    setLayoutStyle(1);
  }, []);

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeCheck = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="w-full flex justify-center">
        <div className="hidden lg:visible w-1/5 lg:flex flex-col p-6">
          <p className="mb-2">Sort By</p>
          <Radio.Group
            className="flex flex-col"
            onChange={onChangeRadio}
            value={value}
          >
            <Radio value={1}>Price: High to Low</Radio>
            <Radio value={2}>Price: Low to High</Radio>
            <Radio value={3}>New First</Radio>
            <Radio value={4}>Rating</Radio>
            <Radio value={5}>Popularity</Radio>
          </Radio.Group>
          <Divider />
          <p className="mb-2">Filters</p>
          <Checkbox onChange={onChangeCheck}>Types</Checkbox>
          <Checkbox onChange={onChangeCheck}>Category</Checkbox>
          <Checkbox onChange={onChangeCheck}>Material</Checkbox>
          <Checkbox onChange={onChangeCheck}>Ocassion</Checkbox>
          <Checkbox onChange={onChangeCheck}>Rating</Checkbox>
        </div>
        <div className="w-full lg:w-5/6 flex flex-col items-start flex-wrap p-4 gap-x-10 gap-y-4 justify-start">
          <div className="flex w-full justify-between items-end">
            <div className="flex flex-col justify-start items-start">
              <p className="p-2 text-2xl font-bold">All Products</p>
              <Breadcrumb
                className="px-4"
                items={[
                  {
                    title: <a href="/">Home</a>,
                  },
                  {
                    title: "Shop",
                  },
                ]}
              />
            </div>
            <div className=" lg:hidden">
              <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <Button type="primary" className="bg-gray-400 mr-4">
                  Sort By
                </Button>
              </Dropdown>
            </div>
          </div>
          <div className="flex flex-wrap justify-around lg:justify-between">
            <FloatButton.BackTop />
            {products.map((product) => (
              <a href={`allproducts/${product.id}`}>
                <ProductCard
                  variant={layoutStyle}
                  data={product}
                  key={product.id}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
