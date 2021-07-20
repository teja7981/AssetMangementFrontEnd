import React, { Component } from 'react'
import image from '../../images/asset.png';
import { Link } from 'react-router-dom' 



export default class Home extends Component {
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
        <Link class="nav-link" to="/register"><big>Register</big></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/login"><big>Login</big></Link>
      </li>

      
    
      </ul>
      </div>
</nav> 
            <div>
                <img src={image} height="658px" width="100%"></img>
            </div>
            </div>
        )
    }
}
