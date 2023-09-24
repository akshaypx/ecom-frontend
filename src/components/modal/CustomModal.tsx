import { Button, Card } from "antd";

interface CustomModalProps {
  setModal1Open: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomModal = ({ setModal1Open }: CustomModalProps) => {
  return (
    <Card
      title="Default size card"
      extra={
        <Button
          onClick={() => {
            setModal1Open(false);
          }}
        >
          Close
        </Button>
      }
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default CustomModal;
