"use client";

import React from "react";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import dynamic from "next/dynamic";

interface RadialBarProps {
  labels: string[];
  values: number[];
}

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const seriesValues = [
  {
    name: "Realizado",
    type: "column",
    data: [440, 505, 414, 671, 227],
  },
  {
    name: "Meta",
    type: "line",
    data: [400, 600, 300, 800, 230],
  },
];

const MixedBarLine = () => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 390,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Ficha de Marca",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul"
    ],
    yaxis: [
      {
        title: {
          text: "Realizado",
        },
        min:0
      },
      {
        opposite: true,
        title: {
          text: "Meta",
        },
        min:0
      },
    ],
  });

  return (
    <div className="p-4 w-full text-black">
      {seriesValues.length > 0 ? (
        <Chart
          type="line"
          height={390}
          series={seriesValues}
          options={options}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default MixedBarLine;
