import { useEffect, useState } from "react";
import { ReactComponent as IconMaterial } from "../../assets/icon-material.svg";
import { dateOptionsProduction } from "../../data/fakeData";
import { MaterialNeeded } from "../../model/Material";
import SectionCard from "../cards/SectionCard";
import { EmptyData } from "../custom/empty-data";

const MaterialsNeededList = () => {
  const [allData, setAllData] = useState<MaterialNeeded[]>([]);
  const [dataChart, setDataChart] = useState<MaterialNeeded[]>([]);
  const [selectedId, setSelectedId] = useState(-1);

  useEffect(() => {
    const materials = new Array(10).fill(0).map((_, index) => ({
      id: index + 1,
      name: `Nguyên vật liệu ${index + 1}`,
      type: Math.floor(Math.random() * 3) + 1,
      unit: "cái",
      quantity: Math.floor(Math.random() * 100) + 1,
      code: `NVL${index + 1}`,
    }));
    setAllData(materials);
  }, []);

  const handleSelect = (data: any) => {
    setSelectedId(data.id);
    const filteredData = allData.filter((val) => val.type === data.id);
    setDataChart(filteredData);
  };

  return (
    <SectionCard
      dataOptions={dateOptionsProduction}
      title="Nguyên Vật Liệu Cần Mua"
      placeholder="Chọn tháng"
      selectedId={selectedId}
      onSelect={handleSelect}
    >
      <div
        className="bg-white flex-1"
        style={{
          height: "400px",
        }}
      >
        <div className="relative">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                <th className="p-3 text-center text-sm font-bold text-[#52575E] w-[10%]">STT</th>
                <th className="p-3 text-left text-sm font-bold text-[#52575E]">Nguyên vật liệu</th>
                <th className="p-3 text-left text-sm font-bold text-[#52575E] w-[20%]">Đơn vị tính</th>
                <th className="p-3 text-center text-sm font-bold text-[#52575E] w-[15%]">Số lượng</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: "calc(400px - 48px)" }}>
          <table className="w-full border-collapse">
            {dataChart.length === 0 ? (
              <tbody>
                <EmptyData />
              </tbody>
            ) : (
              <tbody>
                {dataChart.map((material, index) => (
                  <tr key={material.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-sm text-[#141522] text-center font-bold w-[10%]">{index + 1}</td>
                    <td className="p-3 flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <IconMaterial />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#141522]">{material.name}</p>
                        <p className="text-xs text-gray-500">{material.type}</p>
                        <p className="text-xs text-[#3276FA]">{material.code}</p>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-[#52575E] font-bold w-[20%]">{material.unit}</td>
                    <td className="p-3 text-sm text-[#52575E] text-center font-bold w-[15%]">{material.quantity}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </SectionCard>
  );
};

export default MaterialsNeededList;
