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
import LGSPuanSonucları from "../../../components/LGSPuanSonucları";
import UniversityDataTable from "../../../components/UniversityDataTable";
import LGSPuanHesaplama from "../../../components/LGSPuanHesaplama";

const LGSPage = () => {
  const [toggleReset, setToggleReset] = useState<boolean>(true);
  const [LGSScores, setLGSScores] = useState({
    turkceNet: 0,
    sBilimlerNet: 0,
    tMatematikNet: 0,
    fBilimleriNet: 0,
    inkilapNet: 0,
    dinNet: 0,
    isEnroll:false
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



  const onSubmit = (data: any) => {

  };

  return (
    <>
      <div className="grid">
        <div className="col-12 md:col-6">
          <LGSPuanHesaplama
            setLgsScores={setLGSScores}
            toggleReset={toggleReset}
          />
        </div>
        <div className="col-12 md:col-6">
          <LGSPuanSonucları
            lgsScores={LGSScores}
            setLgsScores={setLGSScores}
            toggleReset={toggleReset}
            setToggleReset={setToggleReset}
          />
        </div>
      </div>
    </>
  );
};

export default LGSPage;
