import React from "react";
class ChildComponent extends React.Component {

    render() {
        console.log("check props", this.props);
        //let name = this.props.name;
        //let age = this.props.age;
        let { name, age, arrJobs } = this.props;
        return (
            <React.Fragment>
                <div>


                    {name}
                    {age}
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            );
                        })
                    }
                </div>
            </React.Fragment>

        )
    }
}



export default ChildComponent;