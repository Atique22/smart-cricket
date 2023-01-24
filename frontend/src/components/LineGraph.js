import * as React from 'react';
import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import 'hammerjs';


function LineGraph() {
    const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    return (
        <Chart className='p-3 w-full h-full bg-black'> 
            <ChartTitle text="Units sold Graph" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem title={{
                    text: 'Months'
                }} categories={categories} />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type="line" data={[123, 276, 310, 212, 240, 156, 98]} />
                <ChartSeriesItem type="line" data={[165, 210, 287, 144, 190, 167, 212]} />
                <ChartSeriesItem type="line" data={[56, 140, 195, 46, 123, 78, 95]} />
            </ChartSeries>
        </Chart>
    );
}

export default LineGraph;