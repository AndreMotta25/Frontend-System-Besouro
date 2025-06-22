"use client";

import React from "react";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import dynamic from "next/dynamic";

interface DonutChartProps {
  labels: string[];
  values: number[];
}

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonutChart = (props: DonutChartProps) => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 490,
      type: "donut",
    },
    labels: props.labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
            chart: {
                width: 200
              },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  return (
    <div className="p-4 w-full">
      {props.values.length > 0 ? (
        <Chart
          type="donut"
          series={props.values}
          height={390}
          options={options}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default DonutChart;
