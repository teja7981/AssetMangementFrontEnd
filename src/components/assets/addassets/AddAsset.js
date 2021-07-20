import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import axios from 'axios'
import AssetService from '../../axios/assetService/AssetService'
import { Link } from 'react-router-dom'

// adding the assets 
 class AddAsset extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            assetid:'',
             assetName:'',
             category:'',
             show:'true'
        }
    }

    // changeHandler  used to add or remove  fields depending on the input made for field
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    cancel=(e)=>{
        this.props.history.push('/addAsset');
    }

    // on submitting the form this function gets triggered
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
        setTimeout(()=>{
            this.setState({show:false});
            this.props.history.push("/assetcomponent");
        })

        AssetService.createAssets(this.state)
			.then(response => {
				console.log(response)
                
			})
			.catch(error => {
				console.log(error)
			})
	}
    
    render() {
        const {assetid,assetName,category} = this.state
        return (
            <div>
                
                {/* NavigationBar */}

            <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
<Link class="navbar-brand" to="#" >Asset Management</Link>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">

  
  <li class="nav-item">
  <Link class="nav-link" to="/logout">Logout</Link>
  </li>

  

  </ul>
  </div>
</nav> 
            <div>
                <h3>Add Assets</h3>
                
                    {/* form creation */}

                <form noValidate autoComplete="off" onSubmit={this.submitHandler} onSubmit={this.cancel}>
                <TextField required id="outlined-basic" label ="assetName" name="assetName" 
                     value={assetName} onChange={this.changeHandler} ></TextField><br></br><br></br>

                    <TextField required id="outlined-basic" label ="category" name="category" 
                     value={category} onChange={this.changeHandler} ></TextField><br></br><br></br>
                    <Button variant="contained" color="primary" onClick={this.submitHandler} > Add</Button>
                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
            </div>
        )
    }
}

export default AddAsset
