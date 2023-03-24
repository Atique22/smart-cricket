import React from "react";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Graph",
  },
  series: [
    {
      data: [1, 2, 9, 4, 3, 6, 2, 9, 4, 3, 6],
    },
  ],
};
export default function HighChartReact() {
  return (
    <div className="col-12">
      <HighChartsReact highcharts={HighCharts} options={options} />
    </div>
  );
}
