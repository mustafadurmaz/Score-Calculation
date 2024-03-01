"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import TYTPuanHesaplama from "../../../components/TYTPuanHesaplama";
import AYTPuanHesaplama from "../../../components/AYTPuanHesaplama";
import PuanSonucları from "../../../components/PuanSonucları";
import UniversityDataTable from "../../../components/UniversityDataTable";
import KPSSExamType from "../../../components/KPSS/KPSSExamType";
import Lisans from "../../../components/KPSS/Lisans";
import Ogretmenlik from "../../../components/KPSS/Ogretmenlik";
import OnLisans from "../../../components/KPSS/OnLisans";
import DinHizmetleri from "../../../components/KPSS/DinHizmetleri";

const KPSSPage = () => {
  const [examType, setExamType] = useState<any>({
    name: "Lisans (P1 - P48)",
    code: "lisans",
  });
  const [toggleReset, setToggleReset] = useState<boolean>(true);
  const [tytScores, setTytScores] = useState({
    turkceNet: 0,
    sBilimlerNet: 0,
    tMatematikNet: 0,
    fBilimleriNet: 0,
    diplomaNotu: 0,
    isEnroll: false,
  });

  const [aytScores, setAytScores] = useState({
    edebiyatNet: 0,
    tarih1Net: 0,
    cografya1Net: 0,
    tarih2Net: 0,
    cografya2Net: 0,
    felsefeNet: 0,
    dinNet: 0,
    matematikNet: 0,
    fizikNet: 0,
    kimyaNet: 0,
    biyolojiNet: 0,
  });

  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit = (data: any) => {};

  console.log("examType", examType);

  return (
    <>
      <div className="grid">
        <div className="col-12 md:col-4">
          <KPSSExamType
            setTytScores={setTytScores}
            toggleReset={toggleReset}
            setExamType={setExamType}
          />
        </div>
        {examType?.code === "lisans" && (
          <div className="col-12 md:col-4">
            <Lisans setAytScores={setAytScores} toggleReset={toggleReset} />
          </div>
        )}

        {examType?.code === "ogretmenlik" && (
          <div className="col-12 md:col-4">
            <Ogretmenlik
              setAytScores={setAytScores}
              toggleReset={toggleReset}
            />
          </div>
        )}

        {examType?.code === "onlisans" && (
          <div className="col-12 md:col-4">
            <OnLisans setAytScores={setAytScores} toggleReset={toggleReset} />
          </div>
        )}

        {examType?.code === "ortaogretim" && (
          <div className="col-12 md:col-4">
            <OnLisans setAytScores={setAytScores} toggleReset={toggleReset} />
          </div>
        )}

        {examType?.code === "dinhizmetleri" && (
          <div className="col-12 md:col-4">
            <DinHizmetleri setAytScores={setAytScores} toggleReset={toggleReset} />
          </div>
        )}

        <div className="col-12 md:col-4">
          <PuanSonucları
            tytScores={tytScores}
            setTytScores={setTytScores}
            aytScores={aytScores}
            setAytScores={setAytScores}
            toggleReset={toggleReset}
            setToggleReset={setToggleReset}
          />
        </div>

        {/* <div className="col-12">
          <UniversityDataTable />
        </div> */}
      </div>
    </>
  );
};

export default KPSSPage;
