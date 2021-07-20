import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import UserService from '../../axios/userService/UserService';
import { Link } from 'react-router-dom';


export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             errors:{},
             show:'true'
        }
    }

    //to write business logic 
    //to get the asset details

    changeHandler = e=>{
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state);
       
    }

    getEmployeeById(id){
        this.props.history.push(`/manager/${id}`);
    }

    getEmployeeDetails(){
        this.props.history.push('/admin');
    }

  // to validate the form fields 

    formValidation=()=>{
        const{email,password}= this.state;
        let isValid=true;
        const errors = {};
        if(!email.includes("@")){
              errors.emailSymbol="email is invalid"
              isValid = false;
        }
        if(password.trim()===""){
            errors.passwordLength="please enter the password"
            isValid = false;
      }
      this.setState({errors});
      return isValid;
    }

// on submitting the form this function gets triggered

    submitHandler = e => {
       
		e.preventDefault()
        const isValid = this.formValidation();
		console.log(this.state)
        var isValidUser = false;

        if(isValid){
            alert('login successfull...!!!')
            UserService.login(this.state)
                .then(response => {
                    console.log(response);
                    setTimeout(()=>{
                        this.setState({show:false});
                        console.log(response.data.id);
                        const id = response.data.id;
                        this.getEmployeeById(id);

                        const role = response.data.role
                        if(role== 'admin'){
                            this.getEmployeeDetails();
                        }else{
                            this.getEmployeeById(id);
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                    setTimeout(()=>{
                        this.setState({show:false});
                        this.props.history.push("/error");
                    })
                })
        }
	}



    render() {
        const {id,email,password,errors,show} = this.state;
        return (
            <div>

                {/* NavigationBar */}

                <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
  <Link class="navbar-brand" to="/home" ><h2>Asset Management</h2></Link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    
      
    <li class="nav-item">
        <Link class="nav-link" to="/register"><big>Register</big></Link>
      </li>

      
    
      </ul>
      </div>
</nav> 
            <div>
            <h3>Login</h3> 
    
            <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
          <TextField required id="outlined-basic" name="email" value={email}  label="email" onChange={this.changeHandler} variant="outlined" /><br/><br/>
          {Object.keys(errors).map((key)=>{
            return <div style={{color:"red"}} key={key}>{errors[key]}</div>
        })}
          <TextField required id="outlined-basic" name="password" value={password} type="password" onChange={this.changeHandler} label="password" variant="outlined" /><br/><br/>
          
          <button variant="contained"  className="btn btn-info" type="submit">
          Login
         </button>
     </form>
         </div>
         </div>
        )
    }
}

