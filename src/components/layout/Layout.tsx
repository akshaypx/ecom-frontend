import Header from "../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="w-full flex-row">
        <div className="">
          <Header />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
