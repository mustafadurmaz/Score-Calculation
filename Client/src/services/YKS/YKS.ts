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
  if (params.tavanPuan) {
    params.tavanPuan = params.tavanPuan;
  }
  else{
    params.tavanPuan = 0;
  }
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

const getAllUniversitiesFaculty= async () => {
  return axios.get("https://localhost:44364/api/OssLisans/GetAllFakulte");
};

  
// Ön lisans 
const getAllUniversitiesFilterName = async () => {
  return axios.get("https://localhost:44364/api/OssOnLisans/GetAllFilterUniversiteAdi");
};

const getFilterUniversitiesOnLisans = async (params:UniversityFilterParams,pagination:PaginationParams) => {

    return axios.post("https://localhost:44364/api/OssOnLisans/GetFilterOssList" + `?pageIndex=${pagination.pageIndex}&pageSize=${pagination.pageSize}`,params);
  };


getAllUniversitiesType
  const service = {
    getAllUniversities,
    getFilterUniversities,
    getAllUniversitiesCity,
    getAllUniversitiesName,
    getAllUniversitiesType,
    getAllUniversitiesProgram,
    getAllUniversitiesFaculty,
    getFilterUniversitiesOnLisans,
    getAllUniversitiesFilterName
  };
  
  export default service;