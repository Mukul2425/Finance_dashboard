import Chart from "react-apexcharts";

export default function PortfolioChart({ assets }) {
  if (!assets || assets.length === 0) return null;

  const values = assets.map(a => a.current_value);

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      foreColor: "#9ca3af",
    },
    grid: { borderColor: "#1f2937" },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.05,
      },
    },
    colors: ["#22c55e"],
    xaxis: {
      categories: assets.map(a => a.symbol),
    },
    tooltip: { theme: "dark" },
  };

  const series = [
    {
      name: "Asset Value",
      data: values,
    },
  ];

  return (
    <div className="bg-[#0f1623] p-6 rounded-xl border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4">
        Portfolio Breakdown
      </h3>
      <Chart options={options} series={series} type="area" height={280} />
    </div>
  );
}
