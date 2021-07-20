import axios from "axios";


const ASSET_REST_API_URL = 'http://localhost:8090/assets'




class AssetService {


    //  used to get the data from the database
    getAssetDetails(){
        return axios.get(ASSET_REST_API_URL);
    }

    // used to add assert to the database
    createAssets(assert){
        return axios.post(ASSET_REST_API_URL+'/create',assert);
    }

    // used to delete assert to the database
    deleteAssets(assetsId){
        return axios.delete(ASSET_REST_API_URL+'/'+assetsId);
    }

    updateAssertStatus(assetsId){
        return axios.post(ASSET_REST_API_URL+'/updateAssertStatus/'+assetsId+"?status=Approved");
    }

}

export default new AssetService();