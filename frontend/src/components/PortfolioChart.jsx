import Chart from "react-apexcharts";

export default function PortfolioChart() {
  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: "#9ca3af",
    },
    grid: {
      borderColor: "#1f2937",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
      },
    },
    colors: ["#22c55e"],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      labels: {
        formatter: (val) => `$${val}`,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const series = [
    {
      name: "Portfolio Value",
      data: [100000, 102500, 101800, 105200, 110000, 115000, 124540],
    },
  ];

  return (
    <div className="bg-[#0f1623] p-6 rounded-xl border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4">
        Portfolio Value
      </h3>
      <Chart options={options} series={series} type="area" height={280} />
    </div>
  );
}
