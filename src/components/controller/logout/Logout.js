import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Logout() {

  // to navigate
    let history=useHistory();
    
    return (
        <div>

{/* NavigationBar */}

        <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
            <Link class="navbar-brand" to="#"><h2 style={{marginLeft:"10px"}}>Asset Management</h2></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
               
          </nav> 
        <div>
           <h4 style={{marginTop:"30px"}}>Do u really want to logout</h4> 

              {/* onclicking to this button redirect to home page */}

           <button variant="contained"  className="btn btn-danger" type="submit" onClick={()=>{history.push('/home')}}>
          Logout
        </button> 
        </div>
        </div>
    )
}