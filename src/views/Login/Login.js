import React from "react";
import "./Login.scss";
//import "../../service/userService";
import axios from 'axios';
class Login extends React.Component {
    componentDidMount() {
        document.title = "Login"; // Thay đổi tiêu đề mới ở đây
    }
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }
    handleLogin = () => {

        const username = this.state.username;
        const password = this.state.password;
        JSON.stringify({ username, password })
        axios.post('http://localhost:8080/api/login', { username, password }, { validateStatus: false })
            .then(response => {
                if (response.status === 200) {
                    // Xác thực thành công, chuyển hướng đến trang chủ
                    window.location.href = '/';
                } else if (response.status === 401) {
                    // Xác thực thất bại
                    alert('Invalid username or password');
                } else {
                    // Lỗi server
                    console.log('Server error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">Login</div>

                        <div className="col-12 form-group login-input">
                            <div className="login-label1">Username:</div>
                            <input type="text" className="form-control" placeholder="Enter your username"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)} />
                        </div>
                        <div className="col-12 form-group login-input">
                            <div className="login-label2">Password:</div>
                            <input type="password" className="form-control" placeholder="Enter your password"
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)} />
                        </div>
                        <div className="col-12 ">
                            <button className="btn-login"
                                onClick={() => this.handleLogin()}
                            >Login</button>
                        </div>

                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>

                    </div>
                </div >
            </div >
        )
    }
}
export default Login;