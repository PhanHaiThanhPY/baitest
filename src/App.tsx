// src/App.tsx
import TopProductCard from "./components/cards/TopProductCard";
import ProductionPlanChart from "./components/charts/ProductionPlanChart";
import ProductionStatusChart from "./components/charts/ProductionStatusChart";
import TopCustomersChart from "./components/charts/TopCustomersChart";
import MaterialsNeededList from "./components/lists/MaterialsNeededList";
import ProductionProgressList from "./components/lists/ProductionProgressList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-2 md:p-8 ">
      <div className="mb-4">
        <TopProductCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-3">
        <div className="lg:col-span-2">
          <ProductionPlanChart />
        </div>
        <div className="lg:col-span-3">
          <TopCustomersChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <ProductionStatusChart />
        </div>
        <div>
          <ProductionProgressList />
        </div>
        <div>
          <MaterialsNeededList />
        </div>
      </div>
    </div>
  );
}

export default App;
