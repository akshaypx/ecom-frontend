import { RightCircleOutlined } from "@ant-design/icons";

interface CategoryCardProps {
  data: {
    id: number;
    title: string;
    collectionItems: number;
    imageUrl: string;
  };
}

const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <div>
      <div className="relative w-48 h-64 sm:w-[300px] sm:h-[400px] overflow-hidden flex justify-center items-center aspect-[3/4] m-4 duration-500">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="object-cover object-center w-full h-full align-middle"
        />
        <div className="w-full bg-gradient-to-t from-white to-transparent flex-col absolute bottom-0 left-0">
          <div className="m-4 mb-0 flex justify-between items-center">
            <p className="font-bold text-xl">{data.title}</p>
            <RightCircleOutlined className="text-xl" />
          </div>
          <div className="m-4 mt-0">{data.collectionItems} items</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
