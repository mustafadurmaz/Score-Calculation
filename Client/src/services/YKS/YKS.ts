import axios from "axios";

interface PaginationParams {
  pageIndex?: number;
  pageSize?: number;
}
interface UniversityFilterParams {
  universiteTuru?: string;
  sehir?: string;
  universiteAdi?: string;
  // fakulte?: string;
  programAdi?: string;
  puanTuru?: string;
  tabanPuan?: number;
  tavanPuan?: number;
}

const getAllUniversities = async (params:PaginationParams) => {
    return axios.post("https://localhost:44364/api/OssLisans/GetAllList"+ `?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}`);
  };
const getFilterUniversities = async (params:UniversityFilterParams,pagination:PaginationParams) => {
  console.log(params);
    return axios.post("https://localhost:44364/api/OssLisans/GetFilterOssList" + `?pageIndex=${pagination.pageIndex}&pageSize=${pagination.pageSize}`,params);
  };

const getAllUniversitiesCity = async () => {
    return axios.get("https://localhost:44364/api/OssLisans/GetAllIl");
  };
  
const getAllUniversitiesName = async () => {
  return axios.get("https://localhost:44364/api/OssLisans/GetAllUniversiteAdi");
};
  
const getAllUniversitiesType = async () => {
  return axios.get("https://localhost:44364/api/OssLisans/GetAllUniversiteTuru");
};
  
const getAllUniversitiesProgram = async () => {
  return axios.get("https://localhost:44364/api/OssLisans/GetAllProgramAdi");
};

getAllUniversitiesType
  const service = {
    getAllUniversities,
    getFilterUniversities,
    getAllUniversitiesCity,
    getAllUniversitiesName,
    getAllUniversitiesType,
    getAllUniversitiesProgram
  };
  
  export default service;