import React, { useEffect, useState } from "react";
import { ProductionProgress } from "../../model/Production";
import SectionCard from "../cards/SectionCard";

interface ProgressItemProps {
  item: ProductionProgress;
}

const ProgressItem: React.FC<ProgressItemProps> = ({ item }) => {
  const percentage = item.total > 0 ? Math.round((item.completed / item.total) * 100) : 0;

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center text-sm mb-1">
        <span className="text-[#1C252E] font-medium">{item.groupName}</span>
        <div className="flex items-center gap-1">
          <span className="text-[#1C252E] font-bold">{item.completed} cái</span>
          <span className="text-gray-500">({percentage}%)</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const ProductionProgressList: React.FC = () => {
  const [allData, setAllData] = useState<ProductionProgress[]>([]);
  const [dataChart, setDataChart] = useState<ProductionProgress[]>([]);
  const [selectedId, setSelectedId] = useState(-1);

  const dataOptions = [
    { id: 1, name: "Chưa hoàn thành" },
    { id: 2, name: "Đang sản xuất" },
    { id: 3, name: "Đã hoàn thành" },
  ];

  useEffect(() => {
    const productNames = [
      "Áo sơ mi dài tay",
      "Áo sơ mi ngắn tay",
      "Quần baggy",
      "Quần tây",
      "Đầm maxi",
      "Áo hoodie",
      "Áo thun",
      "Váy công sở",
      "Áo khoác",
      "Quần jean",
    ];

    const productionProgress = productNames.map((name, index) => {
      const total = Math.floor(Math.random() * 400) + 100;
      const status = Math.floor(Math.random() * 3) + 1;
      const completed = status === 3 ? total : Math.floor(Math.random() * total);

      return {
        id: index + 1,
        groupName: name,
        completed: completed,
        total: total,
        color: `bg-[#1FC583]`,
        status: status,
      };
    });

    setAllData(productionProgress);
  }, []);

  const handleSelect = (data: any) => {
    setSelectedId(data.id);
    const filteredData = allData.filter((item) => item.status === data.id);
    setDataChart(filteredData);
  };

  const renderEmptyItems = () => {
    return Array.from({ length: 7 }, (_, index) => (
      <div key={index} className="mb-4 last:mb-0">
        <div className="flex justify-between items-center text-sm mb-1">
          <span className="text-[#1C252E] font-bold">Chưa có mặt hàng</span>
          <span className="text-[#1C252E] font-bold">-</span>
        </div>
        <div className="w-full bg-[#919EAB1F] rounded-full h-2"></div>
      </div>
    ));
  };

  return (
    <SectionCard
      dataOptions={dataOptions}
      title="Tiến Độ Sản Xuất Theo Nhóm"
      selectedId={selectedId}
      onSelect={(data) => handleSelect(data)}
      placeholder="Chọn trạng thái"
    >
      <div className="space-y-7 overflow-y-auto" style={{ height: "390px" }}>
        {dataChart.length > 0
          ? dataChart.map((item) => <ProgressItem key={item.id} item={item} />)
          : renderEmptyItems()}
      </div>
    </SectionCard>
  );
};

export default ProductionProgressList;
