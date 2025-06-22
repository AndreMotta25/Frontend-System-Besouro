"use client";

import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Carregamento dinâmico do componente Chart para desabilitar SSR
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Função para gerar dados de exemplo para um ano específico
const generateDataForYear = (year: number) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return months.map((month, index) => ({
    month: `${year}-${String(index + 1).padStart(2, '0')}-01T00:00:00.000Z`,
    value: Math.floor(Math.random() * 100) + 20
  }));
};

const ChartWorkVol = () => {
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState<any[]>([]);
  const [options, setOptions] = useState<ApexOptions>({
    colors:['#FFDE15','#31B7BC'],
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [],
      labels: {
        format: 'MMM'  // Formato dos rótulos dos meses
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
  });

  useEffect(() => {
    setLoading(true);

    // Obter o ano atual e o ano passado
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    // Gerar dados para o ano atual e o ano passado
    const currentYearData = generateDataForYear(currentYear);
    const lastYearData = generateDataForYear(lastYear);

    const categories = currentYearData.map(item => item.month);
    const seriesDataCurrentYear = currentYearData.map(item => item.value);
    const seriesDataLastYear = lastYearData.map(item => item.value);

    setSeries([
      {
        name: `Ano ${currentYear}`,
        data: seriesDataCurrentYear
      },
      {
        name: `Ano ${lastYear}`,
        data: seriesDataLastYear
      }
    ]);

    setOptions(prevOptions => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories
      }
    }));

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center'>
        <span className="loader">Loading...</span>
      </div>
    );
  }

  return (
    <div className="p-4">
      {series.length > 0 ? (
        <Chart type='area' height={350}  series={series} options={options} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default ChartWorkVol;
