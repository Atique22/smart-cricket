import React from "react";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

export default function HighChartPie(props) {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Tracking Cricket Data",
      align: "center",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        data: [
          {
            name: "Middle",
            y: props.middle,
            sliced: true,
            selected: true,
          },
          {
            name: "Edge",
            y: props.edge,
          },
          {
            name: "Missed",
            y: props.missed,
          },
        ],
      },
    ],
  };

  return (
    <div className="col-12">
      <HighChartsReact highcharts={HighCharts} options={options} />
    </div>
  );
}
