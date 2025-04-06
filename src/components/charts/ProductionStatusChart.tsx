import React, { useState } from "react";
import { dateOptionsProduction } from "../../data/fakeData";
import { Production } from "../../model/Production";
import SectionCard from "../cards/SectionCard";
import { DountChat } from "../custom/donut-chart";

const getStatusInfo = (index: number): { text: string; textColor: string } => {
  switch (index) {
    case 0:
      return { text: "Chưa hoàn thành", textColor: "text-[#FF8F0D]" };
    case 1:
      return { text: "Đang sản xuất", textColor: "text-[#0375F3]" };
    case 2:
      return { text: "Hoàn thành", textColor: "text-[#1FC583]" };
    default:
      return { text: "Unknown", textColor: "text-gray-600" };
  }
};

const ProductionStatusChart: React.FC = () => {
  const [dataChart, setDataChart] = useState<Production[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading] = useState(false);
  const chartLabels = ["Chưa hoàn thành", "Đang sản xuất", "Hoàn thành"];
  const chartColors = ["#FF8F0D", "#0375F3", "#1FC583"];
  const defaultChartData = [0, 0, 0];

  const filterDataByTime = (data: any) => {
    setSelectedId(data.id);
    const dataProductions = new Array(10).fill(0).map((_, index) => ({
      id: index + 1,
      name: `Sản phẩm ${index + 1}`,
      type: Math.floor(Math.random() * 3) + 1,
      data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    }));
    const filteredData = dataProductions.filter((val) => val.type === parseInt(data.id));
    setDataChart(filteredData);
  };

  const displayData = dataChart.length > 0 ? dataChart[0].data : defaultChartData;

  return (
    <SectionCard
      title="Tình Hình Sản Xuất"
      dataOptions={dateOptionsProduction}
      selectedId={selectedId}
      onSelect={(data) => filterDataByTime(data)}
      placeholder="Chọn tháng"
    >
      <div className="flex flex-col items-center" style={{ height: "24rem" }}>
        <div className="overflow-hidden bg-white rounded-lg dark:bg-black w-[500px]">
          <DountChat
            chartData={displayData}
            chartLabels={chartLabels}
            chartColors={chartColors}
            chartHeight={300}
            chartLoading={loading}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-2 text-sm w-full">
          {displayData.map((value, index) => {
            const status = getStatusInfo(index);
            return (
              <div
                key={index}
                className="flex flex-col border border-b-gray-200 shadow-inner px-3 py-2 rounded-lg w-full"
              >
                <span className={`text-base ${status.textColor} font-medium`}>{value}</span>
                <span className="text-[14px] text-gray-500 mt-1">{status.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
};

export default ProductionStatusChart;
