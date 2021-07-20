import './App.css';

import Login from './components/controller/login/Login';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Admin from './components/controller/employeeDetails/Admin';
import AddAsset from './components/assets/addassets/AddAsset';
import AssetComponent from './components/assets/assetcomponent/AssetComponent';
import Home from './components/controller/home/Home';
import Error from './components/controller/error/Error';
import Logout from './components/controller/logout/Logout';
import Manager from './components/controller/employeeDetails/Manager';
import Register from './components/controller/register/Register';
import AssetDetails from './components/assets/assetDetails/AssetDetails';


// const authentication={
//   isLoggedIn:false,
//   onAuthentication(){
//       this.isLoggedIn=true
//   },
//   getLogInStatus(){
//       return this.isLoggedIn;
//   }
// }

// function SecuredRoute(props){
//   return(
//       <Route path={props.path} render={data=>authentication.getLogInStatus()?(
//           <props.component{...data}></props.component> ):
//      (<Redirect to={{pathname:'/home'}}></Redirect>) }></Route>
//   )
// }


function App() {
  return (

    // enable navigation among views of various components
   
   <Router> 
      <div className="App">
      
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} /> 
     <Route exact path="/register" component={Register} /> 
     <Route  exact path="/login" component={Login} />
     <Route exact path="/manager/:id" component={Manager} />
     <Route exact path="/addAsset" component={AddAsset} />
     <Route exact path="/assetdetails" component={AssetDetails} />
     <Route exact path="/assetcomponent" component={AssetComponent} />
     <Route exact path="/admin" component={Admin} />
        <Route exact path="/error" component={Error} />

     <Route exact path="/logout" component={Logout} />
    </div>
    </div>
    </Router>
  );
}

export default App;
