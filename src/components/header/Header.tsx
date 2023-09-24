import { DownOutlined, MenuOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Modal, Space } from "antd";
import { useState } from "react";
import CustomModal from "../modal/CustomModal";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
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
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const Header = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        modalRender={() => <CustomModal setModal1Open={setModal1Open} />}
        closable={true}
      ></Modal>
      <div className="flex justify-around text-white bg-indigo-950 h-20 items-center text-sm font-bold">
        <div className="lg:hidden">
          <MenuOutlined onClick={() => setModal1Open(true)} />
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
        <div>
          <Button
            type="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
