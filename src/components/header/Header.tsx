import {
  DownOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Drawer, Dropdown, Space } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidenav from "../sidenav/Sidenav";

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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <div className="fixed w-full top-0 z-50 shadow-md">
      <Drawer
        title={"Moon Creations"}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={`left`}
        width={340}
        bodyStyle={{
          padding: "0px",
          margin: "0px",
        }}
      >
        <Sidenav />
      </Drawer>
      <div className="sticky top-0 bottom-0 left-0 self-start">
        <div className="flex justify-between lg:justify-around text-white bg-indigo-950 h-20 items-center text-sm font-bold">
          <div className="pl-10 lg:hidden">
            <MenuOutlined onClick={showDrawer} />
          </div>
          <div className="">
            <a href="/">Moon Creations</a>
          </div>
          <div className="lg:visible hidden w-1/2 lg:flex flex-row justify-around">
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
            <a href="/categories">Categories</a>
          </div>
          <div className="lg:visible hidden lg:flex">
            <Button
              type="primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </div>
          <div className="flex w-40 gap-x-10 pr-10 justify-start lg:hidden">
            <SearchOutlined />
            <UserOutlined />
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
