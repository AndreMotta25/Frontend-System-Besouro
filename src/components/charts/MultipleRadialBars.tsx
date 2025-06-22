import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { IBudgetProjectDetails } from "@/interfaces/ProjectsInterface";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ColumnDataProps {
  props: IBudgetProjectDetails;
  color: string;
}

const ColumnDataChart = ({ props, color }: ColumnDataProps) => {
  const [chartState] = useState<{
    series: { name: string; data: number[] }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "Gasto mensal",
        data: props.percentualExpenses,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
        },
      },
      colors: [`${color}`],
      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val.toFixed(2)}%`,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#909090"],
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val, { dataPointIndex }) => {
            const valorReal = props?.mensalValues[dataPointIndex];
            return `R$${valorReal.toLocaleString("pt-BR")}`;
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#909090",
          },
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: (val) => `${val}%`,
          style: {
            colors: "#909090"
          }
        },
      },
    },
  });

  return (
    <div className="py-5 relative">
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
      <div className="absolute w-full bottom-0">
        <div className="w-full flex justify-center items-center flex-col">
          <span>Orçamento Total</span>
          <div className="flex w-2/3 gap-4 items-center">
            <span>
              R$
              {props.totalAmount?.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
            <div className="rounded-lg h-2 bg-gray-600/10 w-full">
              <div
                style={{
                  backgroundColor: color ? color : "black",
                  width: `${props.totalPercent}%`,
                }}
                className=" rounded-lg h-full"
              />
            </div>
            <span>
              R$
              {props?.totalExpenses.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnDataChart;
