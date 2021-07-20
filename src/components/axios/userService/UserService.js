import axios from "axios";

const USER_REST_API_URL ='http://localhost:8090/employee'

class UserService{

    // used to get the data from the database 
    getEmployeeDetails(){
        return axios.get(USER_REST_API_URL);
    }

    //used to add the data to the data base 
    postUsers(employee){
        return axios.post(USER_REST_API_URL+'/create',employee);
    }

    //used to login 
    login(employee){
        return axios.post(USER_REST_API_URL+'/login',employee);
    }

    //used to get the data from the database based on id
    getEmployeeById(employeeId){
        return axios.get(USER_REST_API_URL+ '/' + employeeId);
    }

}

export default new UserService();