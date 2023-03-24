import React from "react";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

export default function LineGraph(props) {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      align: "center",
      text: "Tracking data",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "No. of balls",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: "BallStatus",
        colorByPoint: true,
        data: [
          {
            name: "Middle",
            y: props.middle,
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
