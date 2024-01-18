import axios from "axios";

interface PaginationParams {
  pageIndex?: number;
  pageSize?: number;
}
interface LGSFilterParams {
  universiteTuru?: string;
  sehir?: string;
  universiteAdi?: string;
  // fakulte?: string;
  programAdi?: string;
  puanTuru?: string;
  tabanPuan?: number;
  tavanPuan?: number;
}

const GetAllList = async (params:PaginationParams) => {
    return axios.post("https://localhost:44364/api/LGS/GetAllList"+ `?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}`);
  };

const GetFilterLGSList = async (params:LGSFilterParams,pagination:PaginationParams) => {
  console.log(params);
  if (params.tavanPuan) {
    params.tavanPuan = params.tavanPuan;
  }
  else{
    params.tavanPuan = 0;
  }
    return axios.post("https://localhost:44364/api/LGS/GetFilterLGSList" + `?pageIndex=${pagination.pageIndex}&pageSize=${pagination.pageSize}`,params);
  };

const GetAllIl = async () => {
    return axios.get("https://localhost:44364/api/LGS/GetAllIl");
  };
  
const GetAllLiseAdi = async () => {
  return axios.get("https://localhost:44364/api/LGS/GetAllLiseAdi");
};

const GetAllAlanTuru = async () => {
  return axios.get("https://localhost:44364/api/LGS/GetAllAlanTuru");
};
  
const GetAllOgrenimDili = async () => {
  return axios.get("https://localhost:44364/api/LGS/GetAllOgrenimDili");
};

const GetAllIlce= async () => {
  return axios.get("https://localhost:44364/api/LGS/GetAllIlce");
};

  const service = {
    GetAllList,
    GetFilterLGSList,
    GetAllIl,
    GetAllLiseAdi,
    GetAllAlanTuru,
    GetAllOgrenimDili,
    GetAllIlce
  };
  
  export default service;