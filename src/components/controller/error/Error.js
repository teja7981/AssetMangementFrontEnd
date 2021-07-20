
import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Error() {


  // to navigate 
    let history=useHistory();
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
            <Link class="navbar-brand" to="#"><h2 style={{marginLeft:"10px"}}>Asset Management</h2></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
               
          </nav> 
        <div>
           <h6 style={{marginTop:"30px"}}>email and password does not match</h6> 
           <h6 >Please enter valid email and password</h6><br/>
            
            {/* onclicking to this button redirect to login page */}

           <Button variant="contained" color="info" type="submit" onClick={()=>{history.push('/login')}}>
          Go Back
        </Button>
        </div>
        </div>
    )
}