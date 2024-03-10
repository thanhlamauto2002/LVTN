import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label,
    LabelList
} from 'recharts';
class H2S_T1 extends React.Component {
    render() {
        let data = [...this.props.H2S];
        data.reverse();


        return (

            <LineChart width={400} height={300} data={data}>
                <XAxis dataKey="time">

                </XAxis>
                <YAxis>
                    <Label value="%" angle={0} position="insideLeft" />
                </YAxis>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="H2S" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>

        );
    }

}

export default H2S_T1;