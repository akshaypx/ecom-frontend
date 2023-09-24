import { Divider, Radio, RadioChangeEvent } from "antd";
import ProductCard from "../../components/productCard/ProductCard";
import { useState } from "react";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";

const AllProducts = () => {
  const [value, setValue] = useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeCheck = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="hidden lg:visible w-1/6 lg:flex flex-col p-6">
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
      <div className="w-full lg:w-5/6 flex flex-wrap p-4 gap-x-10 gap-y-4 justify-start items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default AllProducts;
