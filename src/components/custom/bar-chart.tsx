import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { formatCurrencyDecimal } from "../../utils/helpers";
interface BarChartProps<T> {
  chartData: T[];
  chartColors: T[] | string[];
  chartCategories: T[] | string[];
  chartHeight: number;
  chartLoading: boolean;
  horizontal?: boolean;
  titleX?: string;
}

export const BarChart = <T,>(props: BarChartProps<T>) => {
  const columnChart: ApexOptions = {
    series: props.chartData as ApexAxisChartSeries,
    chart: {
      type: "bar",
      height: props.chartHeight,
      stacked: false,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: props.chartColors,
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        barHeight: props.horizontal ? "20%" : "550%",
        horizontal: props.horizontal,
      },
    },
    xaxis: {
      categories: props.chartCategories,
      title: {
        text: props.titleX ? props.titleX : "Sản lượng",
        style: {
          color: "#6b7280",
          fontSize: "12px",
          fontWeight: 400,
        },
        offsetY: props.horizontal ? 0 : -10,
      },
      labels: {
        show: true,
        style: {
          colors: "#6b7280",
          fontSize: "12px",
        },
        formatter: (value) => {
          return formatCurrencyDecimal(Number(value));
        },
      },
    },
    yaxis: {
      title: {
        text: props.horizontal ? "" : "Cái",
        style: {
          color: "#6b7280",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
      labels: {
        style: {
          colors: "#6b7280",
          fontSize: "12px",
        },
        align: "left",
      },
      min: 0,
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: {
        size: 14,
        strokeWidth: 0,
        shape: "rectangle" as ApexMarkerShape,
        offsetY: 0,
        customHTML: function () {
          return '<span style="display: inline-block; width: 40px; height: 10px; border-radius: 4px; background-color: currentColor; margin-right: 10px;"></span>';
        },
      },
      fontSize: "12px",
      labels: {
        colors: "#52575E",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        return `
            <div>
                ${formatCurrencyDecimal(value)}
            </div>
        `;
      },
      style: {
        fontSize: "12px",
      },
    },
  };

  return (
    <div className="h-full flex flex-col">
      <div className="overflow-hidden bg-white rounded-lg">
        {props.chartLoading ? (
          <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
            <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
          </div>
        ) : (
          <ReactApexChart
            series={columnChart.series}
            options={columnChart}
            className="rounded-lg overflow-hidden"
            type="bar"
            height={props.chartHeight}
          />
        )}
      </div>
    </div>
  );
};
