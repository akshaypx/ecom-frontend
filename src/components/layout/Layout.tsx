import Header from "../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="w-full flex-row">
        <Header />
        <div className="mt-20">{children}</div>
      </div>
    </>
  );
};

export default Layout;
