import axios from 'axios';
const instance=axios.create({
    baseURL:"https://citylight-89ab0.firebaseio.com"
});
instance.defaults.headers.common["Authorization"]="testVersion App";
export default instance;
