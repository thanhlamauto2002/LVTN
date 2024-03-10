// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//         };
//     }

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/terminal1');
//             this.setState({ data: response.data });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     render() {


//         return (
//             <div>
//                 <h1>Data List</h1>
//                 {data.map((item, index) => (
//                     <div key={index}>
//                         <p>Date: {item.Date}</p>
//                         <p>Time: {item.Time}</p>
//                         <p>CO2: {item.CO2}</p>
//                         <p>NO2: {item.NO2}</p>
//                         <p>SO2: {item.SO2}</p>
//                         <p>CO: {item.CO}</p>
//                         <p>NO: {item.NO}</p>
//                         <p>H2S: {item.H2S}</p>
//                         <hr />
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default App;