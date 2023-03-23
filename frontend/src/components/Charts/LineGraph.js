import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-react-charts";



function LineGraph() {
    const data = [19, 12, 17];

    return (
        <Chart>
                <ChartSeries >
                    <ChartSeriesItem data={data}/>
                </ChartSeries>
        </Chart>
    );
}

export default LineGraph;