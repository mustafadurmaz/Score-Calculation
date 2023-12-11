import axios from "axios";

const url = "http://localhost:3000/yks-lisans";

const getAllUniversities = async () => {
    return axios.get(url);
  };


  const service = {
    getAllUniversities
  };
  
  export default service;