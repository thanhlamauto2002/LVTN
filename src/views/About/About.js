import React from "react";

class About extends React.Component {
    componentDidMount() {
        document.title = "About"; // Thay đổi tiêu đề mới ở đây
    }

    render() {
        return (
            <div> About Page </div>
        )
    }
}
export default About;