import axios from "axios";

interface PaginationParams {
  pageIndex?: number;
  pageSize?: number;
}
interface IlParams {
  il?: string;
}
interface LGSFilterParams {
  liseProgramTuru?: string;
  sehir?: string;
  liseAdi?: string;
  // fakulte?: string;
  il?: string;
  ilce?: string;
  liseDili?: string;
  tavanPuan?: number;
}

const GetAllList = async (params:PaginationParams) => {
    return axios.post("https://localhost:44364/api/LGS/GetAllList"+ `?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}`);
  };

const GetFilterLGSList = async (params:LGSFilterParams,pagination:PaginationParams) => {
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

const GetAllIlce= async (params:IlParams) => {
  console.log(params);
  if (typeof params.il !== 'undefined') {
    params.il = params.il;
  } 
  else{
    params.il = "";
  }
  return axios.post("https://localhost:44364/api/LGS/GetAllIlce/"+ `${params.il}`);
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