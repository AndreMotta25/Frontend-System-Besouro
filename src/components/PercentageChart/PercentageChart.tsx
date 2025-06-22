interface Percentage{
    percentage: number
}

const PercentageChart = ({percentage} : Percentage) => {
    const radius = 110; // Raio do círculo
    const strokeWidth = 2; // Largura da borda
    const circumference = 2 * Math.PI * radius; // Circunferência do círculo
    const offset = circumference - (percentage / 100) * circumference; // Deslocamento da borda
  
    return (
        <div className="h-60 w-60 rounded-full flex justify-center items-center relative">
          <svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth} className="">
            <circle
              cx={radius + strokeWidth / 2}
              cy={radius + strokeWidth / 2}
              r={radius}
              stroke="#e0e0e0"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <circle
              cx={radius + strokeWidth / 2}
              cy={radius + strokeWidth / 2}
              r={radius}
              stroke="#1951A0"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: 'stroke-dashoffset 0.5s ease-in-out',
                transform: 'rotate(90deg)',
                transformOrigin: '50% 50%',
              }}
            />
          </svg>
          <div className="absolute text-white bg-[#1951A0] py-1 px-5 rounded-xl">
            {percentage}%
          </div>
        </div>
    );
  };

  export default PercentageChart;   