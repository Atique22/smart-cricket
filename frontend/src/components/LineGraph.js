import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-react-charts";



function LineGraph() {
    const data = [19, 12, 17, 9, 18, 13, 12, 13, 9, 23, 12, 17, 9, 18, 13, 12, 13, 9, 17, 9, 18, 13, 12, 13, 9, 23, 18, 13, 12, 13, 9, 23, 12];

    return (
        <Chart  style={{ backgroundColor: 'grey', padding:"2rem"}}>
                <ChartSeries >
                    <ChartSeriesItem data={data}/>
                </ChartSeries>
        </Chart>
    );
}

export default LineGraph;