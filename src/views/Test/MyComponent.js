import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import "./Demo.scss"

class MyComponent extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        arrJobs: [
            { id: 'job1', title: 'Engineer', salary: '400$' },
            { id: 'job2', title: 'Doctor', salary: '500$' }
        ]
    }

    handleonChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleonChangeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    handleonClickButton = (event) => {
        event.preventDefault();
        alert("Da luu du lieu");
    }
    handeonClickButtonShow = (event) => {
        alert("da bam vao nut");
    }
    render() {


        return (
            <React.Fragment>
                <form action="/action_page.php">
                    <label for="fname">First Name:</label><br />
                    <input type="text"
                        id="fname"
                        name="fname"
                        value={this.state.firstname}
                        onChange={(event) => this.handleonChangeFirstName(event)}></input><br />
                    <label for="lname">Last Name </label><br />
                    <input type="text"
                        id="lname"
                        name="lname"
                        value={this.state.lastname}
                        onChange={this.handleonChangeLastName}></input><br />
                    <input type="submit"
                        value="Submit"
                        onClick={(event) => this.handleonClickButton(event)}></input><br />
                    <button style={{ color: "red" }}
                        onClick={(event) => this.handleonClickButton(event)}>
                        Show

                    </button>
                </form>
                <ChildComponent
                    name={this.state.firstname}
                    age="22 "
                    arrJobs={this.state.arrJobs}>

                </ChildComponent>
                <AddComponent></AddComponent>
            </React.Fragment>

        )
    }
}
export default MyComponent;