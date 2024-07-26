import { CaretRightOutlined } from "@ant-design/icons";
import { ListProps } from "../types/common";

export default function List({ title }: ListProps) {
  return (
    <div className="flex py-2">
      <CaretRightOutlined />
      <h2 className="text-sm">{title}</h2>
    </div>
  );
}
