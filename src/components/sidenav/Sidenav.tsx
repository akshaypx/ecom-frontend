import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Slidernav.css";

const Sidenav = () => {
  const [isShop, setIsShop] = useState(false);
  return (
    <div className="text-lg flex flex-col gap-y-4 p-4">
      {isShop ? (
        <>
          <LeftOutlined onClick={() => setIsShop(false)} />
          <hr />
          <p>Necklace</p>
          <hr />
          <p>Choker</p>
          <hr />
          <p>Bracelet</p>
          <hr />
          <p>Ring</p>
          <hr />
          <p>Earring</p>
        </>
      ) : (
        <>
          <a href="/">Home</a>
          <hr />
          <div className="flex justify-between">
            <a href="/allproducts">Shop</a>
            <RightOutlined onClick={() => setIsShop(true)} />
          </div>
          <hr />
          <p>Contact Us</p>
          <hr />
          <p>Return Product</p>
        </>
      )}
    </div>
  );
};

export default Sidenav;
