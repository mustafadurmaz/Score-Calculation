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
import CustomCities from "../customComponents/CustomCities";
import CustomLGSName from "../customComponents/CustomCities";
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
  showUniversityTable?: boolean;
  setShowUniversityTable?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LGSFİlter = ({
  setLGS,
  lazyParams,
  setTotalLGS,
  showUniversityTable,
  setShowUniversityTable,
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
      universiteTuru: data?.LGSType?.universiteTuru||"",
      sehir: data?.city?.sehir||"",
      universiteAdi: data?.LGSName?.universiteAdi||"",
      fakulte: data?.facultyName?.fakulteler||"",
      // fakulte: string;
      programAdi: data?.LGSProgram?.programAdi||"",
      puanTuru: data?.scoreType?.puanTuru.split(' ')[0],
      // tabanPuan: number;
      tavanPuan: data?.scoreType?.yerlestirmePuani
    }

    // setLGSName(data?.LGSType?.universiteTuru||"")
    // setCity(data?.city?.sehir||"")
    // setLGSType(data?.LGSType?.universiteTuru||"")
    // setFacultyName(data?.facultyName?.fakulteler||"")
    // setLGSProgram(data?.LGSProgram?.programAdi||"")
    // setScoreType(data?.scoreType?.puanTuru.split(' ')[0])

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
          fieldLabel="Üniversiteler"
          name="LGSName"
          control={control}
          errors={errors}
          placeholder="Üniversite Seçiniz"
        />
        <CustomLGSProgram
          fieldLabel="Üniversite Programları"
          name="LGSProgram"
          control={control}
          errors={errors}
          placeholder="Üniversite Programı Seçiniz"
        />
        <CustomCities
          fieldLabel="İller"
          name="city"
          control={control}
          errors={errors}
          placeholder="İl Seçiniz"
        />
        <CustomLGSType
          fieldLabel="Üniversite Türü"
          name="LGSType"
          control={control}
          errors={errors}
          placeholder="Üniversite Türü Seçiniz"
        />
        <CustomFacultyName
          fieldLabel="Fakülteler"
          name="facultyName"
          control={control}
          errors={errors}
          placeholder="Fakülte Türü Seçiniz"
        />
        <CustomScoreType
          fieldLabel="Üniversite Puan Türü"
          name="scoreType"
          control={control}
          errors={errors}
          placeholder="Üniversite Puan Türü Seçiniz"
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
