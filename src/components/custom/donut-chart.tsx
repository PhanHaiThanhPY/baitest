import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { formatCurrencyDecimal } from "../../utils/helpers";
interface DountChatProps<T> {
  chartData: number[];
  chartLabels: T[] | string[];
  chartColors: T[] | string[];
  chartHeight: number;
  chartLoading: boolean;
}

export const DountChat = <T,>(props: DountChatProps<T>) => {
  const hasData = props.chartData.length > 0 && props.chartData.some((value) => value > 0);

  const salesByCategory: ApexOptions = {
    series: hasData ? props.chartData : [100],
    chart: {
      type: "donut",
      height: props.chartHeight,
    },
    labels: hasData ? (props.chartLabels as string[]) : [""],
    colors: hasData ? (props.chartColors as string[]) : ["#E2E8F0"],
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Lệnh sản xuất",
              fontSize: "16px",
              fontWeight: 600,
              color: "#1f2937",
              formatter: function () {
                return hasData ? formatCurrencyDecimal(props.chartData.reduce((a, b) => a + b, 0)) : "0";
              },
            },
          },
        },
        customScale: 1,
        offsetX: 0,
        offsetY: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: hasData,
      custom: function ({ series, seriesIndex, w }) {
        const value = series[seriesIndex];
        const color = w.config.colors[seriesIndex];
        return `<div style="background-color: ${color}; color: white; padding: 8px; border-radius: 4px;">${formatCurrencyDecimal(
          value
        )}%</div>`;
      },
      style: {
        fontSize: "12px",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden bg-white rounded-lg ">
      {props.chartLoading ? (
        <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
          <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
        </div>
      ) : (
        <ReactApexChart
          series={salesByCategory.series}
          options={salesByCategory}
          type="donut"
          height={props.chartHeight}
        />
      )}
    </div>
  );
};
