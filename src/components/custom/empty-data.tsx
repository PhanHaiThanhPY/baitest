import { ReactComponent as IconEmpty } from "../../assets/icon-empty.svg";

interface EmptyDataProps {
  className?: string;
}

export const EmptyData = ({ className }: EmptyDataProps) => {
  return (
    <div className="flex justify-center items-center w-100 h-100 flex-col">
      <IconEmpty style={{ width: "180px", height: "180px" }} />
      <label className="form-label text-base text-center" style={{ color: "#A7A8AB" }}>
        Chưa có dữ liệu
      </label>
    </div>
  );
};
