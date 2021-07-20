import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import image from '../../images/asset-management.jpg';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import UserService from '../../axios/userService/UserService';
import { Link } from 'react-router-dom';
import { Col,Form } from 'react-bootstrap';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            errors:{},
            show:'true'
        }
    }



     // to validate the form fields 
   formValidation=()=>{
       const{role,firstName,lastName,email,password} = this.state;
       let isValid=true;
       const errors={};
       
       if(firstName.trim()===""){
        errors.firstname="enter the firstname field"
        isValid=false;
       }

       if(lastName.trim()===""){
        errors.lastname="enter the lastname field"
        isValid=false;
       }
       if(email.trim()===""){
        errors.emailfield="enter the email field"
        isValid=false;
       }
       if(!email.includes("@")){
        errors.emailSymbol="email should contains @ symbol"
        isValid = false;
      }
      if(password.trim()===""){
        errors.passwordfield="enter the password field"
        isValid=false;
       }
       if(password.trim().length<8){
        errors.passwordfield="password must be atleast 8 characters"
        isValid=false;
       }
  this.setState({errors});
      return isValid;
   }
    
   //to write business logic 
    //to get the asset details

    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    // on submitting the form this function gets triggered
	submitHandler = e => {
		e.preventDefault()
        console.log(this.state)
        const isValid = this.formValidation();
        if(isValid){
            alert('registration successfull...!!!');
            setTimeout(()=>{
                this.setState({show:false});
                this.props.history.push("/login");
            })
        }
        UserService.postUsers(this.state)
			.then(response => {
				console.log(response)
                
			})
			.catch(error => {
				console.log(error)
			})
        
	}
    
    render() {
        const{role,firstName,lastName,email,password,errors} = this.state
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
      <Link class="nav-link" to="/login"><big>Login</big></Link>
      </li>

      
    
      </ul>
      </div>
</nav> 
         {/* <div className="col-md-7" >
         <div className="card card-container "style={{marginRight:"600px"}} style={{marginLeft:"540px"}} > */}
 
            <div >
            <h3>Register</h3> 
           
            
              
            
             {/* creating the form  */}

            <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <Col sm="2" style={{marginLeft:"640px"}} >
            <Form.Control  readOnly defaultValue="Manager" style={{paddingLeft:"80px"}} />
             </Col><br/>
            <TextField required id="outlined-basic" name="firstName" value={firstName} onChange={this.changeHandler} label="firstName" variant="outlined" /><br/><br/>
          <TextField required id="outlined-basic" name="lastName" value={lastName} onChange={this.changeHandler} label="lastName" variant="outlined" /><br/><br/>
          <TextField required id="outlined-basic" name="email" value={email} onChange={this.changeHandler} label="email" variant="outlined" /><br/><br/>
          <TextField required id="outlined-basic" type="password" name="password" value={password} onChange={this.changeHandler} label="password" variant="outlined" /><br/><br/>
          <button variant="contained" type="submit" className="btn btn-info"  onClick={this.submitHandler}>
          Register
        </button>

             {/* display error messages  */}

        {Object.keys(errors).map((key)=>{
            return <div style={{color:"red"}} key={key}>{errors[key]}</div>
        })}
     </form>
         </div>
         </div>
        //  {/* </div>
        //  </div> */}
        )
    }
}
