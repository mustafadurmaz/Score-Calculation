import axios from "axios";

const url = "http://localhost:3000/yks-lisans";

interface PaginationParams {
  page?: number;
  limit?: number;
}

const getAllUniversities = async (query: PaginationParams) => {
    return axios.get(url+"/universities"+`?page=${query.page}&limit=${query.limit}`);
  };


  const service = {
    getAllUniversities
  };
  
  export default service;