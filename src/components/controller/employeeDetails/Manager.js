import React, { Component } from 'react'
import UserSevice from '../../axios/userService/UserService'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Manager extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             firstName:'',
             lastName:'',
             role:'',
             email:'',
             show:'true'
        }
    }


    //to write business logic 
    //to get the emplyee details

    componentDidMount() {
        UserSevice.getEmployeeById(this.state.id).then((response)=>{
            let employee = response.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
                role:'Manager'
            });
        })
    }
    

    // on submitting the form this function gets triggered
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
        setTimeout(()=>{
            this.setState({show:false});
            this.props.history.push("/assetdetails");
        })
    }
    
    render() {
        return (
            <div>

                {/* NavigationBar */}
            <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
<Link class="navbar-brand" to="#" ><h2>Asset Management</h2></Link>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">

  
  <li class="nav-item">
  <Link class="nav-link" to="/logout"><big>Logout</big></Link>
  </li>

  

  </ul>
  </div>
</nav> 
            <div>

                {/* creating a table  */}
                <h1 className = "text-center"> Employee Details</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td><h5>Employee Id</h5> </td>
                            <td><h5>Role</h5> </td>
                            <td><h5>Employee First Name</h5> </td>
                            <td><h5>Employee Last Name</h5> </td>
                            <td><h5>Employee Email</h5> </td>
                        </tr>

                    </thead>
                    <tbody>                            
                                <tr key = {this.state.id}>
                                     <td> {this.state.id}</td>  
                                     <td> {this.state.role}</td>  
                                     <td> {this.state.firstName}</td>   
                                     <td> {this.state.lastName}</td>   
                                     <td> {this.state.email}</td> 
                                </tr>
                        <div>
                            <br></br>
                        <button className="btn btn-success" onClick={this.submitHandler}>ShowAssets</button>
                        </div>  
                    </tbody>
                </table>
               </div>
            </div>
        )
    }
}
