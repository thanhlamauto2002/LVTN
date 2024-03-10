import React from "react";

class Alarm extends React.Component {
    componentDidMount() {
        document.title = "Alarm"; // Thay đổi tiêu đề mới ở đây
    }

    render() {
        return (
            <div> Alarm Page </div>
        )
    }
}
export default Alarm;