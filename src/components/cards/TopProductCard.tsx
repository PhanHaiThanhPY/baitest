import { useState } from "react";
import { ReactComponent as IconDown } from "../../assets/icon-down.svg";
import { ReactComponent as IconTop } from "../../assets/icon-top.svg";
import { dataOptions, topProductsData } from "../../data/fakeData";
import { TopProduct } from "../../model/TopProduct";
import SectionCard from "./SectionCard";

const TopProductCard: React.FC = () => {
  const [dataTopProduct, setDataTopProduct] = useState<TopProduct[]>([]);
  const [selectedId, setSelectedId] = useState(-1);

  const filterDataByTime = (data: any) => {
    setSelectedId(data.id);
    const selectedMonth = data.id - 1;
    let filteredData: TopProduct[] = [];

    if (selectedMonth >= 0 && selectedMonth <= 11) {
      filteredData = topProductsData.filter((product) => {
        const productDate = new Date(product.date);
        return productDate.getMonth() === selectedMonth;
      });
    }

    setDataTopProduct(filteredData);
  };

  const renderEmpty = () => {
    const emptyItems = Array(5).fill(null);
    return emptyItems.map((_, index) => (
      <div
        key={`empty-${index}`}
        className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 shadow-inner"
      >
        <div className="flex flex-row justify-between flex-1">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-[#0375F3]">0</div>
            <div className="text-base text-gray-500 truncate">Chưa có mặt hàng</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <SectionCard
      dataOptions={dataOptions}
      title="Top Sản Phẩm Sản Xuất Nhiều Nhất"
      selectedId={selectedId}
      onSelect={(data) => filterDataByTime(data)}
      placeholder="Chọn tháng"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {dataTopProduct.length === 0
          ? renderEmpty()
          : dataTopProduct.map((dataProduct: TopProduct) => (
              <div
                key={dataProduct.id}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 shadow-inner"
              >
                <div className="flex flex-row justify-between flex-1">
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold text-[#0375F3]">{dataProduct.quantity}</div>
                    <div className="text-base text-gray-500 truncate" title={dataProduct.name}>
                      {dataProduct.name}
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {dataProduct.percentage ?? 0 > 0 ? <IconTop /> : <IconDown />}
                    <label className="text-base font-bold text-[#3A3E4C]">
                      {Math.abs(dataProduct.percentage ?? 0)}%
                    </label>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </SectionCard>
  );
};

export default TopProductCard;
