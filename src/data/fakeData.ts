import { ChartData } from "../model/ChartData";
import { CustomerData } from "../model/Customer";
import { DataOption } from "../model/Option";
import { Production } from "../model/Production";
import { TopProduct } from "../model/TopProduct";

export const topProductsData: TopProduct[] = [
  { id: 1, name: "Áo sơ mi dài tay", quantity: 48, percentage: 8.2, color: "bg-blue-500", date: "2025-04-01" },
  { id: 2, name: "Quần tây", quantity: 40, color: "bg-yellow-500", date: "2025-04-10" },
  { id: 3, name: "Áo hoodie", quantity: 23, percentage: 3.5, color: "bg-red-500", date: "2025-03-15" },
  { id: 4, name: "Đầm maxi", quantity: 48, percentage: 4.7, color: "bg-indigo-500", date: "2025-03-20" },
  { id: 5, name: "Áo thun cổ tròn", quantity: 25, color: "bg-gray-500", date: "2025-05-08" },
];

export const dataCharts: ChartData[] = [
  { name: "Kế hoạch", data: [60, 100, 80, 70, 80], quarter: 1 },
  { name: "Thực hiện", data: [40, 50, 20, 40, 60], quarter: 1 },
  { name: "Kế hoạch", data: [70, 90, 85, 65, 75], quarter: 2 },
  { name: "Thực hiện", data: [50, 60, 30, 45, 55], quarter: 2 },
  { name: "Kế hoạch", data: [55, 95, 70, 80, 90], quarter: 3 },
  { name: "Thực hiện", data: [35, 55, 25, 50, 70], quarter: 3 },
  { name: "Kế hoạch", data: [65, 85, 90, 75, 85], quarter: 4 },
  { name: "Thực hiện", data: [45, 65, 35, 55, 65], quarter: 4 },
];

export const dataCustomers: CustomerData[] = [
  { id: 1, name: "Sản lượng", data: [2900, 2800, 2700, 2600, 2500], year: 2023 },
  { id: 2, name: "Sản lượng", data: [3000, 2900, 2800, 2700, 2600], year: 2024 },
  { id: 3, name: "Sản lượng", data: [3100, 3000, 2900, 2800, 2700], year: 2025 },
  { id: 4, name: "Sản lượng", data: [3200, 3100, 3000, 2900, 2800], year: 2026 },
];

export const dateOptionsProduction: DataOption[] = [
  { id: 1, name: "Hôm nay" },
  { id: 2, name: "Ngày mai" },
  { id: 3, name: "Tuần này" },
  { id: 4, name: "Tuần sau" },
  { id: 5, name: "Tháng này" },
  { id: 6, name: "Tháng sau" },
];

export const dataProductions: Production[] = [
  { id: 1, name: "Hôm nay", data: [3, 2, 1], type: 1 },
  { id: 2, name: "Ngày mai", data: [1, 2, 4], type: 2 },
  { id: 3, name: "Tuần này", data: [5, 6, 5], type: 3 },
  { id: 4, name: "Tuần sau", data: [2, 3, 2], type: 4 },
  { id: 5, name: "Tháng này", data: [1, 2, 3], type: 5 },
  { id: 6, name: "Tháng sau", data: [3, 2, 1], type: 6 },
];

export const dataOptions: DataOption[] = [
  { id: "1", name: "Tháng 1" },
  { id: "2", name: "Tháng 2" },
  { id: "3", name: "Tháng 3" },
  { id: "4", name: "Tháng 4" },
  { id: "5", name: "Tháng 5" },
];
