"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface MixedMultipleYExiosChartProps {
  dashName:string;  
  height:number;
  labels: string[];
  values: Array<{ name: string; type: string; data: number[] }>;
}

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MixedMultipleYExiosChart = (props: MixedMultipleYExiosChartProps) => {
  const [options, setOptions] = useState<ApexOptions>({
    colors:['#9be895','#e85d58', '#5875e8'],
    chart: {
      height: 490,
      type: "line",
      stacked: false,
      toolbar: {show: false}
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    title: {
      text: props.dashName,
      align: "right",
    },
    xaxis: {
      categories: props.labels,
    },
    yaxis: [
      {
        labels: {
          formatter: function (value) {
            return `R$ ${value?.toFixed(2)}`; 
          },
        },
        title: {
          text: "Valor (R$)",
        },
      },
    ],
    tooltip: {
      y: {
        formatter: function (value) {
          return `R$ ${value?.toFixed(2)}`;
        },
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div className="p-4 w-full h-full">
      {props.values.length > 0 ? (
        <Chart
          type="line"
          series={props.values}
          height={props.height}
          options={options}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default MixedMultipleYExiosChart;
