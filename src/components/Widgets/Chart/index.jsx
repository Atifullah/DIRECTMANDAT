import Chart from "react-apexcharts";

export const CustomLineChart = () => {
  return (
    <div className="w-full">
      <Chart
        options={{
          chart: {
            id: "line-chart",
            animations: {
              enabled: true,
              easing: "linear",
              dynamicAnimation: {
                enabled: true,
                speed: 1000,
              },
            },
          },
          xaxis: {
            type: "datetime",
            labels: {
              datetimeFormatter: {
                year: "yyyy",
                month: "MMM",
                day: "dd",
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#EF6A1F"],
          stroke: {
            width: 2,
          },
        }}
        series={[
          {
            name: "Transactions",
            data: [
              [30, 30],
              [4, 0],
              [4, 5],
              [5, 0],
            ],
          },
        ]}
        type="line"
      />
    </div>
  );
};
