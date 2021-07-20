import React ,{ Component } from 'react';
import Button from '@material-ui/core/Button'
import AssetService from '../../axios/assetService/AssetService';
import UserService from '../../axios/userService/UserService';
import axios from 'axios';
import { Link } from 'react-router-dom';



class AssetDetails extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            assets:[],
            show:'true'
        }
        
    }

// to delete an asset

    // deleteAssets(assetsId){
    //   AssetService.deleteAssets(assetsId).then(res=>{
    //      this.setState({assets:this.state.assets.filter(assets=>assets.assetsId!==assetsId)});
    //   }).catch(error =>{
    //       console.log(error);
    //   });
    // }

    // // to updatethe status  
    
    // updateAssertStatus(assetsId){
    //     AssetService.updateAssertStatus(assetsId).then(res=>{
    //         this.setState({assets:this.state.assets.filter(assets=>assets.assetsId!==assetsId)});
    //         this.setState({assets:this.state.assets.concat(res.data)});
    //     }).catch(error =>{
    //         console.log(error);
    //     });
    //   }

    //to write business logic 
    //to get the asset details

    componentDidMount(){
        AssetService.getAssetDetails().then((response) => {
            this.setState({ assets: response.data})
        });
    }

     // on submitting the form this function gets triggered

    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
        setTimeout(()=>{
            this.setState({show:false});
            // this.props.history.push("/assetcomponent");
        })
        
    }

    render (){
        return (
           
            <div>

           {/* NavigationBar */}

            <nav className="navbar navbar-expand-lg navbar-light bg-info" id="nav">
                 <Link className="navbar-brand" to="#" ><h2>Asset Management</h2></Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse"
                   data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                         </button>

                         <div className="collapse navbar-collapse" id="navbarNav">
                               <ul className="navbar-nav">

  
                               <li className="nav-item">
                                  <Link className="nav-link" to="/logout"><big>Logout</big></Link>
                                     </li>

  

               </ul>
             </div>
             </nav> 
            <div className="color">
                <h1 className = "text-center"> Asset List</h1>
                <div className="row">
                  {/* <button className="btn btn-success" onClick={this.submitHandler} style={{margin: "0px 0px 20px 100px"}}>Add Assets</button> */}
                </div>
                <div className="row">

               {/* creating a table  */}

                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>

                             <td> <h5>Assets Id</h5></td>
                             <td><h5>Assets Name</h5> </td>
                             <td> <h5>Assets Category</h5></td>
                             <td> <h5>Status</h5></td>
                             {/* <td> <h5>Action</h5></td> */}
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.assets.map(
                                getAsset => 
                                <tr key = {getAsset.assetsId}>
                                      <td>{getAsset.assetsId}</td> 
                                      <td>{getAsset.assetName}</td> 
                                      <td>{getAsset.category}</td>
                                      <td>{getAsset.status}</td> 
                                      {/* <td>
                                          <button onClick={()=>this.deleteAssets(getAsset.assetsId)}className="btn btn-info"  style={{marginRight:"10px"}}><i class="fas fa-trash"></i></button>
                                      
                                      
                                          <button onClick={()=>this.updateAssertStatus(getAsset.assetsId)}className="btn btn-info" >Update Status</button>
                                      </td> */}

                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
            </div>
           </div>

        )
    }
}

export default AssetDetails;