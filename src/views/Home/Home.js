import React from "react";
import img2 from "../../assets/images/img3.jpg"
import './Button.scss';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends React.Component {
    componentDidMount() {
        document.title = "Home"; // Thay đổi tiêu đề mới ở đây
    }


    render() {

        return (
            <>
                <div className="container">
                    <img src={img2} className="background-image" />
                    <a href="/terminal1" className="overlay-button1">Terminal 1</a>
                    <a href="/terminal2" className="overlay-button2">Terminal 2</a>
                    <a href="/terminal3" className="overlay-button3">Terminal 3</a>
                    <title>Home</title>
                </div>
            </>
        )
    }
}
export default Home;