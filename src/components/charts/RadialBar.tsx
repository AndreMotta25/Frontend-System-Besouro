"use client";

import React from "react";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import dynamic from "next/dynamic";

interface RadialBarProps {
  labels: string[];
  values: number[];
  subsGoalValue: number; // Meta total de inscritos
}

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialBar = (props: RadialBarProps) => {
  // Calcula as porcentagens dos valores em relação à meta
  const calculatePercentages = () => {
    return props.values.map((value, index) => {
      return props.labels[index] === props.labels[0]
        ? ((value / props.subsGoalValue) * 100).toFixed(1)
        : ((value / props.values[0]) * 100).toFixed(1);
    });
  };

  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 490,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 280,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: "16px",
          formatter: (seriesName, opts) => {
            const percentages = calculatePercentages();
            return `${seriesName} ${percentages[opts.seriesIndex]}%`;
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      custom: function ({ series, seriesIndex, w }) {
        const label = w.config.labels[seriesIndex];

        let tooltipContent = "";

        switch (label) {
          case props.labels[0]:
            tooltipContent = `${props.values[0]} ${label} (Meta: ${props.subsGoalValue})`;
            break;
          case props.labels[1]:
            tooltipContent = `${props.values[1]} ${label} (${
              ((props.values[1] * 100) / props.values[0]).toFixed(1)
            }%) dos inscritos`;
            break;
          case props.labels[2]:
            tooltipContent = `${props.values[2]} ${label} (${
              ((props.values[2] * 100) / props.values[0]).toFixed(1)
            }%) dos inscritos`;
            break;
          default:
            break;
        }

        return `<div class="arrow_box">
                    <span>${tooltipContent}</span>
                  </div>`;
      },
    },
    labels: props.labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  });

  return (
    <div className="p-4 w-full">
      {props.values.length > 0 ? (
        <Chart
          type="radialBar"
          height={390}
          series={calculatePercentages().map(Number)}
          options={options}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default RadialBar;
