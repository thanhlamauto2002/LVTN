import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
class CO2 extends React.Component {
    render() {
        let data = [...this.props.CO2];
        data.reverse();


        return (

            <LineChart width={400} height={300} data={data}>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CO2" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>

        );
    }

}

export default CO2;