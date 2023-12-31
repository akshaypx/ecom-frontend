import {
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Drawer, Dropdown, Input, Modal, Space } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidenav from "../sidenav/Sidenav";
import CustomButton from "../button/CustomButton";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Necklace
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
        Choker
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
        Earring
      </a>
    ),
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const showCart = () => {
    setIsCartOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onCloseCart = () => {
    setIsCartOpen(false);
  };

  const navigate = useNavigate();
  return (
    <div className="fixed w-full top-0 z-50 text-black">
      <Drawer
        title={"Moon Creations"}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={`left`}
        width={300}
        bodyStyle={{
          padding: "0px",
          margin: "0px",
        }}
      >
        <Sidenav />
      </Drawer>
      <Drawer
        className=""
        title="Your Cart is here"
        placement={"right"}
        width={300}
        onClose={onCloseCart}
        open={isCartOpen}
        extra={
          <Space>
            <CustomButton onClick={onCloseCart} type="default">
              Checkout
            </CustomButton>
          </Space>
        }
        closeIcon={<CloseOutlined />}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Modal
        className="w-full "
        title={
          <Input
            className="w-full h-10"
            placeholder="Type here..."
            suffix={<SearchOutlined />}
          />
        }
        style={{ top: 20 }}
        open={isSearchOpen}
        onOk={() => setIsSearchOpen(false)}
        onCancel={() => setIsSearchOpen(false)}
        footer={null}
        closeIcon={null}
      ></Modal>
      <div className="sticky top-0 bottom-0 left-0 self-start">
        <div className="flex justify-between lg:justify-around bg-gray-200 h-16 items-center text-sm font-bold">
          <div className="pl-10 lg:hidden">
            <MenuOutlined onClick={showDrawer} />
          </div>
          <div className="">
            <a href="/">Moon Creations</a>
          </div>
          <div className="lg:visible hidden w-1/2 lg:flex flex-row justify-around items-center">
            <a href="/allproducts">View All</a>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  New Arrivals
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="lg:visible hidden lg:flex lg:gap-x-4">
            <CustomButton onClick={showCart} type="primary">
              Your Cart
            </CustomButton>
            <CustomButton
              className=""
              type="default"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </CustomButton>
          </div>
          <div className="flex w-40 gap-x-10 pr-10 justify-start lg:hidden">
            <SearchOutlined onClick={() => setIsSearchOpen(true)} />
            <UserOutlined
              onClick={() => {
                navigate("/login");
              }}
            />
            <ShoppingCartOutlined onClick={showCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
