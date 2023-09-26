import { Button } from "antd";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps {
  children: React.ReactNode;
  type: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  onClick: () => void;
  className?: string;
}

const CustomButton = ({
  children,
  type,
  onClick,
  className,
}: CustomButtonProps) => {
  if (type === "primary") {
    return (
      <Button
        className={twMerge(` text-black border-black rounded-none`, className)}
        type="default"
        onClick={onClick}
      >
        {children}
      </Button>
    );
  } else if (type === "default") {
    return (
      <Button
        className={twMerge(`text-white rounded-none bg-black`, className)}
        type="primary"
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
};

export default CustomButton;
