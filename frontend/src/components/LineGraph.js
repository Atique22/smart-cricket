import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-react-charts";



function LineGraph() {
    const data = [10, 12, 13, 9, 8, 13];

    return (
        <Chart className='p-3 w-full h-full '>
                <ChartSeries>
                    <ChartSeriesItem data={data}  />
                </ChartSeries>
        </Chart>
    );
}

export default LineGraph;