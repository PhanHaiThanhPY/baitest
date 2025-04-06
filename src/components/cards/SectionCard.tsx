import { DataOption } from "../../model/Option";
import { SelectDropdown } from "../custom/select-dropdown";

interface SectionCardProps {
  title: string;
  selectedId: string | number;
  dataOptions: DataOption[];
  onSelect?: (value: DataOption) => void;
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  selectedId,
  dataOptions,
  onSelect,
  children,
  className = "",
  placeholder = "Vui lòng chọn",
}) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-gray-800">{title}</h2>
        <SelectDropdown
          selectedId={selectedId}
          onChange={(selectedOptions: DataOption[]) => {
            if (selectedOptions.length > 0 && onSelect) {
              onSelect(selectedOptions[0]);
            }
          }}
          placeholder={placeholder}
          dataOptions={dataOptions}
          getOptionLabel={(option: DataOption) => option.name}
          getOptionKey={(option: DataOption) => option.id}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SectionCard;
