import React from "react";
import Select, { components } from "react-select";

interface SelectDropdownProps<T> {
  placeholder?: string;
  onChange: (selected: T[]) => void;
  disabled?: boolean;
  dataOptions: T[];
  getOptionLabel: (option: T) => string;
  getOptionKey: (option: T) => number | string;
  getOptionIcon?: (option: T) => React.ReactNode;
  className?: string;
  selectedId?: number | string | (number | string)[];
  isMulti?: boolean;
}

interface OptionType {
  value: number | string;
  label: string;
  icon?: React.ReactNode;
}

export const SelectDropdown = <T,>({
  placeholder = "Vui lòng chọn",
  onChange,
  disabled = false,
  dataOptions = [],
  getOptionLabel,
  getOptionKey,
  getOptionIcon,
  className,
  selectedId,
  isMulti = false,
}: SelectDropdownProps<T>) => {
  // Tạo danh sách options từ dataOptions
  const options: OptionType[] = dataOptions.map((option) => ({
    value: getOptionKey(option),
    label: getOptionLabel(option),
    icon: getOptionIcon ? getOptionIcon(option) : null,
  }));

  // Hàm hỗ trợ tìm giá trị mặc định
  const getDefaultValue = () => {
    if (selectedId === undefined || selectedId === null) return isMulti ? [] : null;
    if (isMulti && Array.isArray(selectedId)) {
      return options.filter((option) => selectedId.includes(option.value));
    }
    return options.find((option) => option.value === selectedId) ?? null;
  };

  // Component tùy chỉnh cho Option
  const CustomOption = (props: any) => (
    <components.Option {...props}>
      <div className="flex items-center overflow-x-hidden">
        {props.data.icon && <span className="mr-2">{props.data.icon}</span>}
        <span className="break-words">{props.data.label}</span>
      </div>
    </components.Option>
  );

  // Xử lý onChange chung cho cả single và multi
  const handleChange = (selectedOption: any) => {
    const selectedValues = isMulti
      ? (selectedOption as OptionType[])?.map((opt) => opt.value) || []
      : selectedOption
      ? [(selectedOption as OptionType).value]
      : [];

    const selectedData = dataOptions.filter((option) => selectedValues.includes(getOptionKey(option)));
    onChange(selectedData);
  };

  return (
    <Select<OptionType, boolean>
      className={`custom-scroll form-select-custom ${className ?? "min-w-[180px]"}`}
      placeholder={placeholder}
      options={options}
      value={getDefaultValue()}
      isSearchable={true}
      onChange={handleChange}
      isDisabled={disabled}
      components={{ Option: CustomOption }}
      noOptionsMessage={() => "Không có kết quả phù hợp"}
      menuPortalTarget={document.body}
      classNames={{
        control: () => "form-control-custom",
        option: () => "option-custom",
        menu: () => "dark:bg-[#181f32] dark:text-white-dark",
        menuList: () => "menu-list-custom",
      }}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        menu: (provided) => ({
          ...provided,
          zIndex: 9999,
          color: "#7D7E81",
          fontSize: "14px",
          fontWeight: 600,
        }),
        placeholder: (base) => ({
          ...base,
          color: "#7D7E81",
          fontSize: "14px",
          fontWeight: 600,
        }),
        singleValue: (base) => ({
          ...base,
          color: "#7D7E81",
          fontSize: "14px",
          fontWeight: 600,
        }),
      }}
      menuPlacement="auto"
      menuPosition="fixed"
      isMulti={isMulti}
      closeMenuOnSelect={!isMulti}
    />
  );
};
