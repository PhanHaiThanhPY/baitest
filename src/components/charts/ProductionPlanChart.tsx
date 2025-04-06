import { useState } from "react";
import { dataCharts } from "../../data/fakeData";
import { ChartData } from "../../model/ChartData";
import { DataOption } from "../../model/Option";
import SectionCard from "../cards/SectionCard";
import { BarChart } from "../custom/bar-chart";

const ProductionPlanChart: React.FC = () => {
  const [dataChart, setDataChart] = useState<ChartData[]>([]);
  const [selectedId, setSelectedId] = useState(-1);
  const [loading] = useState(false);

  const chartColors = ["#0375F3", "#1FC583"];
  const chartCategories = ["Áo ba lỗ", "Áo sơ mi", "Áo thun polo", "Quần baggy", "Quần jogger"];
  
  const dataOptions: DataOption[] = [
    { id: 1, name: "Quý 1" },
    { id: 2, name: "Quý 2" },
    { id: 3, name: "Quý 3" },
    { id: 4, name: "Quý 4" },
  ];

  const handleDataOption = (data: any) => {
    const filteredData: ChartData[] = dataCharts.filter((val) => val.quarter === data.id);
    setDataChart(filteredData);
    setSelectedId(data.id);
  };

  return (
    <SectionCard
      title="Kế Hoạch Sản Xuất"
      dataOptions={dataOptions}
      selectedId={selectedId}
      onSelect={(data) => handleDataOption(data)}
      placeholder="Chọn quý"
    >
      <div className="h-full flex flex-col">
        <div className="overflow-hidden bg-white rounded-lg ">
          <BarChart
            chartData={dataChart}
            chartColors={chartColors}
            chartCategories={chartCategories}
            chartHeight={300}
            chartLoading={loading}
            titleX="Mặt hàng"
          />
        </div>
      </div>
    </SectionCard>
  );
};

export default ProductionPlanChart;
