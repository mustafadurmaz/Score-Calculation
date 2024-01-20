"use client";
import React, { useState, useEffect } from "react";
import { Panel } from "primereact/panel";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Column } from "primereact/column";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import LGSService from "../../services/LGS/LGS";
import CustomCities from "../customComponents/LGS/CustomLGSCities";
import CustomIlce from "../customComponents/LGS/CustomLGSIlce";
import CustomLGSName from "../customComponents/LGS/CustomLGSName";
import CustomLGSAlan from "../customComponents/LGS/CustomLGSAlan";
import CustomLGSOgrenimDili from "../customComponents/LGS/CustomLGSOgrenimDili";


import CustomLGSType from "../customComponents/CustomCities";
import CustomLGSProgram from "../customComponents/CustomCities";
import CustomScoreType from "../customComponents/CustomScoreType";
import CustomFacultyName from "../customComponents/CustomFacultyName";



import { Button } from "primereact/button";

interface ITYTInputs {
  turkceDogru?: number;
  turkceYanlis?: number;
  turkceNet?: number;
  sBilimlerDogru?: number;
  sBilimlerYanlis?: number;
  sBilimlerNet?: number;
  tMatematikDogru?: number;
  tMatematikYanlis?: number;
  tMatematikNet?: number;
  fBilimleriDogru?: number;
  fBilimleriYanlis?: number;
  fBilimleriNet?: number;
  diplomaNotu?: number;
  OBP?: number;
}

interface Params {
  lazyParams?: any;
  setLGS?: any;
  setTotalLGS?: any;
  scoreResults?: any;
  showLGSTable?: boolean;
  setShowLGSTable?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LGSFİlter = ({
  setLGS,
  lazyParams,
  setTotalLGS,
  showLGSTable,
  setShowLGSTable,
  scoreResults
}: Params) => {
  const [loading, setLoading] = useState(false);

  // const [LGSName, setLGSName] = useState();
  // const [city, setCity] = useState();
  // const [LGSType, setLGSType] = useState();
  // const [facultyName, setFacultyName] = useState();
  // const [LGSProgram, setLGSProgram] = useState();
  // const [scoreType, setScoreType] = useState();

  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
    reset,
  } = useForm<ITYTInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      // turkceNet: 0,
      // turkceDogru: 0,
    },
  });

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, [
    lazyParams
  ]);


  const onSubmit = (data:any) => {

    let params = {
      liseProgramTuru: data?.alanTuru?.alanTuru||"",
      sehir: data?.il?.il||"",
      liseAdi: data?.liseAdi?.liseAdi||"",
      ilce: data?.ilcce?.ilcce||"",
      liseDili: data?.CustomLGSOgrenimDili?.ogrenimDili||"",
      tavanPuan: data?.scoreType?.yerlestirmePuani
    }

    // setLGSName(data?.LGSType?.universiteTuru||"")
    // setCity(data?.city?.sehir||"")
    // setLGSType(data?.LGSType?.universiteTuru||"")
    // setFacultyName(data?.facultyName?.fakulteler||"")
    // setLGSProgram(data?.LGSProgram?.programAdi||"")
    // setScoreType(data?.scoreType?.puanTuru.split(' ')[0])

    console.log(data);
    let pagination = {
      pageSize:lazyParams.rows,
      pageIndex:lazyParams.page
    }

    LGSService.GetFilterLGSList( params,pagination)
    .then((response) => {
      setLGS(response.data);
      setTotalLGS(response.data.total) 
      setTotalLGS(response.data[0].toplamSatirSayisi) 
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });


  }
  return (
    <>
      <Panel header="Filtrele" toggleable>  
      <form onSubmit={handleSubmit(onSubmit)}>
      <CustomLGSName
          fieldLabel="Liseler"
          name="liseAdi"
          control={control}
          errors={errors}
          placeholder="Lise Seçiniz"
        />
        <CustomLGSAlan
          fieldLabel="Lise Program Çeşitleri"
          name="alanTuru"
          control={control}
          errors={errors}
          placeholder="Lise Programı Seçiniz"
        />
        <CustomCities
          fieldLabel="il"
          name="il"
          control={control}
          errors={errors}
          placeholder="İl Seçiniz"
        />
        <CustomIlce
          fieldLabel="ilce"
          name="ilce"
          control={control}
          errors={errors}
          placeholder="İlçe Seçiniz"
        />
        <CustomLGSOgrenimDili
          fieldLabel="Öğrenim Dili"
          name="CustomLGSOgrenimDili"
          control={control}
          errors={errors}
          placeholder="Lise Öğrenim Dili Seçiniz"
        />
        <CustomScoreType
          fieldLabel="Lise Puan Türü"
          name="scoreType"
          control={control}
          errors={errors}
          placeholder="lise Puan Türü Seçiniz"
          scoreResults ={scoreResults}
        />      
        <Button
          label="Arama Yap"
          type="submit"
          className="p-button-success w-5 ml-4"
          autoFocus
        />
        </form>
      </Panel>
    </>
  );
};

export default LGSFİlter;
