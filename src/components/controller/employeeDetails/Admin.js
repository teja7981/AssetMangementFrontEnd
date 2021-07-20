import React, { Component } from "react";
import UserService from "../../axios/userService/UserService";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],
    };
  }
  componentDidMount() {
    UserService.getEmployeeDetails().then((response) => {
      this.setState({ employee: response.data });
    });
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    setTimeout(() => {
      this.setState({ show: false });
      this.props.history.push("/addAsset");
    });
  };

  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
            <Link class="navbar-brand" to="#">
              <h2 style={{ marginLeft: "20px" }}>Asset Management</h2>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/logout">
                    <big>Logout</big>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1 className="text-center"> Employee Details</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>
                  <h5>Employee Id</h5>{" "}
                </td>
               
                <td>
                  <h5>Employee First Name</h5>{" "}
                </td>
                <td>
                  <h5>Employee Last Name</h5>{" "}
                </td>
                <td>
                  <h5>Employee Email</h5>{" "}
                </td>
                
              </tr>
            </thead>
            <tbody>
              {this.state.employee.map((employeeDetails) => (
                <tr key={employeeDetails.id}>
                  <td> {employeeDetails.id}</td>
                  
                  <td> {employeeDetails.firstName}</td>
                  <td> {employeeDetails.lastName}</td>
                  <td> {employeeDetails.email}</td>
                  
                </tr>
              ))}
              <div>
                <br></br>
                <button
                  className="btn btn-success"
                  onClick={this.submitHandler}
                >
                  AddAssets
                </button>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
