
import React from "react";
import CO2 from "./CO2_T1";
import SO2 from "./SO2_T1";
import NO2 from "./NO2_T1";
import NO from "./NO_T1";
import CO from "./CO_T1";
import H2S from "./H2S_T1";
import Timer from "../Timer";
import axios from 'axios';
import '../Terminal.scss';


class Terminal1 extends React.Component {

    state_show = {
        id: 1,
        CO2: [
            { time: '', CO2: '' },
            { time: '', CO2: '' },
            { time: '', CO2: '' },
            { time: '', CO2: '' },
            { time: '', CO2: '' },
            { time: '', CO2: '' },
        ],
        CO: [
            { time: '', CO: '' },
            { time: '', CO: '' },
            { time: '', CO: '' },
            { time: '', CO: '' },
            { time: '', CO: '' },
            { time: '', CO: '' },
        ],
        NO2: [
            { time: '', NO2: '' },
            { time: '', NO2: '' },
            { time: '', NO2: '' },
            { time: '', NO2: '' },
            { time: '', NO2: '' },
            { time: '', NO2: '' },
        ],
        NO: [
            { time: '', NO: '' },
            { time: '', NO: '' },
            { time: '', NO: '' },
            { time: '', NO: '' },
            { time: '', NO: '' },
            { time: '', NO: '' },
        ],
        SO2: [
            { time: '', SO2: '' },
            { time: '', SO2: '' },
            { time: '', SO2: '' },
            { time: '', SO2: '' },
            { time: '', SO2: '' },
            { time: '', SO2: '' },
        ],
        H2S: [
            { time: '', H2S: '' },
            { time: '', H2S: '' },
            { time: '', H2S: '' },
            { time: '', H2S: '' },
            { time: '', H2S: '' },
            { time: '', H2S: '' },
        ],
    }
    // componentDidMount() {
    //     document.title = "Terminal 1"; // Thay đổi tiêu đề mới ở đây
    // }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.fetchData();
        document.title = "Terminal 1";
    }

    fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/terminal1');
            this.setState({ data: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };




    render() {
        const { data } = this.state;
        data.map((item, index) => {
            this.state_show.CO2[index].time = item.Time;
            this.state_show.NO2[index].time = item.Time;
            this.state_show.SO2[index].time = item.Time;
            this.state_show.NO[index].time = item.Time;
            this.state_show.CO[index].time = item.Time;
            this.state_show.H2S[index].time = item.Time;

            this.state_show.CO2[index].CO2 = item.CO2;
            this.state_show.SO2[index].SO2 = item.SO2;
            this.state_show.NO2[index].NO2 = item.NO2;
            this.state_show.NO[index].NO = item.NO;
            this.state_show.CO[index].CO = item.CO;
            this.state_show.H2S[index].H2S = item.H2S;
        });
        return (
            <>
                <div className="terminal-background">
                    <div style={{ position: 'absolute', top: '50px', left: '600px' }}>Terminal 1  </div>
                    <div style={{ position: 'absolute', top: '30px', left: '10px' }} ><Timer></Timer></div>
                    <div style={{ position: 'absolute', top: '100px', left: '10px' }}><CO2 CO2={this.state_show.CO2} ></CO2>
                    </div>
                    <div style={{ position: 'absolute', top: '100px', left: '450px' }}><SO2 SO2={this.state_show.SO2}></SO2></div>
                    <div style={{ position: 'absolute', top: '100px', left: '890px' }}><NO2 NO2={this.state_show.NO2}></NO2></div>
                    <div style={{ position: 'absolute', top: '400px', left: '10px' }}><NO NO={this.state_show.NO}></NO></div>
                    <div style={{ position: 'absolute', top: '400px', left: '450px' }}><CO CO={this.state_show.CO}></CO></div>
                    <div style={{ position: 'absolute', top: '400px', left: '890px' }}><H2S H2S={this.state_show.H2S}></H2S></div>


                </div>

            </>
        )
    }
}
export default Terminal1;