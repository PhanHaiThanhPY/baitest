import { useState } from "react";
import { dataCustomers } from "../../data/fakeData";
import { CustomerData } from "../../model/Customer";
import { DataOption } from "../../model/Option";
import SectionCard from "../cards/SectionCard";
import { BarChart } from "../custom/bar-chart";

const TopCustomersChart: React.FC = () => {
  const [dataChart, setDataChart] = useState<CustomerData[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [loading] = useState(false);

  const chartColors = ["#0375F3"];
  const chartCategories = [
    "Công ty Đệ may Happy Polla",
    "Công ty MAY mặc SAIGON trendy",
    "OUTLET Lemon squeeze",
    "Shop quần áo streetwear New",
    "Shop thời trang công sở Basic Office",
  ];

  const dataOptions: DataOption[] = [
    { id: 2023, name: "Năm 2023" },
    { id: 2024, name: "Năm 2024" },
    { id: 2025, name: "Năm 2025" },
    { id: 2026, name: "Năm 2026" },
  ];

  const filterChartDataByYear = (data: any) => {
    const year = data.id;
    let filteredData: CustomerData[] = dataCustomers.filter((data) => data.year === year);
    setDataChart(filteredData);
    setSelectedId(data.id);
  };

  return (
    <SectionCard
      dataOptions={dataOptions}
      title="Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất"
      selectedId={selectedId}
      onSelect={(data) => filterChartDataByYear(data)}
      placeholder="Chọn năm"
    >
      <div className="h-full flex flex-col">
        <div className="overflow-hidden bg-white rounded-lg">
          <BarChart
            chartData={dataChart}
            chartColors={chartColors}
            chartCategories={chartCategories}
            chartHeight={300}
            chartLoading={loading}
            horizontal={true}
          />
        </div>
      </div>
    </SectionCard>
  );
};

export default TopCustomersChart;
