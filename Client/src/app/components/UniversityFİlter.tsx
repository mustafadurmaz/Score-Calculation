"use client";
import React, { useState, useEffect } from "react";
import { Panel } from "primereact/panel";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Column } from "primereact/column";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import YKSService from "../../services/YKS/YKS";
import CustomCities from "../customComponents/CustomCities";
import CustomUniversitiesName from "../customComponents/CustomUniversitiesName";
import CustomUniversitiesType from "../customComponents/CustomUniversitiesType";
import CustomUniversitiesProgram from "../customComponents/CustomUniversitiesProgram";
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
  setUniversities?: any;
  setTotalUniversities?: any;
  scoreResults?: any;
  showUniversityTable?: boolean;
  setShowUniversityTable?: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityFİlter = ({
  setUniversities,
  lazyParams,
  setTotalUniversities,
  showUniversityTable,
  setShowUniversityTable,
  scoreResults
}: Params) => {
  const [loading, setLoading] = useState(false);


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
      universiteTuru: data?.universitiesType?.universiteTuru||"",
      sehir: data?.city?.sehir||"",
      universiteAdi: data?.universitiesName?.universiteAdi||"",
      fakulte: data?.facultyName?.fakulteler||"",
      // fakulte: string;
      programAdi: data?.universitiesProgram?.programAdi||"",
      puanTuru: data?.scoreType?.puanTuru.split(' ')[0],
      // tabanPuan: number;
      tavanPuan: data?.scoreType?.yerlestirmePuani
    }

    let pagination = {
      pageSize:lazyParams.rows,
      pageIndex:lazyParams.page
    }

    if(params.puanTuru == "TYT"){
      YKSService.getFilterUniversitiesOnLisans( params,pagination)
      .then((response) => {
        setUniversities(response.data);
        setTotalUniversities(response.data.total) 
        setTotalUniversities(response.data[0].toplamSatirSayisi) 
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    }
    else{
      YKSService.getFilterUniversities( params,pagination)
      .then((response) => {
        setUniversities(response.data);
        setTotalUniversities(response.data.total) 
        setTotalUniversities(response.data[0].toplamSatirSayisi) 
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    }


  }
  return (
    <>
      <Panel header="Filtrele" toggleable>  
      <form onSubmit={handleSubmit(onSubmit)}>
      <CustomUniversitiesName
          fieldLabel="Üniversiteler"
          name="universitiesName"
          control={control}
          errors={errors}
          placeholder="Üniversite Seçiniz"
        />
        <CustomUniversitiesProgram
          fieldLabel="Üniversite Programları"
          name="universitiesProgram"
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
        <CustomUniversitiesType
          fieldLabel="Üniversite Türü"
          name="universitiesType"
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

export default UniversityFİlter;
