"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

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
  tytScores: any;
  aytScores: any;
}

const PuanSonucları = ({ tytScores, aytScores }: Params) => {
  const [scoreResults, setScoreResults] = useState([
    {
      puanTuru: "TYT",
      hamPuan: "",
      yerlestirmePuani: "",
    },
    {
      puanTuru: "SAY",
      hamPuan: "",
      yerlestirmePuani: "",
    },
    {
      puanTuru: "EA",
      hamPuan: "",
      yerlestirmePuani: "",
    },
    {
      puanTuru: "SÖZ",
      hamPuan: "",
      yerlestirmePuani: "",
    },
  ]);

  console.log("scoreResults", scoreResults);

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
      turkceNet: 0,
      turkceDogru: 0,
    },
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const scoreCalculate = () => {
    let ekPuan = tytScores?.diplomaNotu * 0.6;

    let tytHamPuan =
      tytScores?.turkceNet * 2.89 +
      tytScores?.sBilimlerNet * 3.02 +
      tytScores?.tMatematikNet * 3.02 +
      tytScores?.fBilimleriNet * 3.06 +
      141.9;

    let sayHamPuan =
      tytScores?.turkceNet * 1.19 +
      tytScores?.sBilimlerNet * 1.24 +
      tytScores?.tMatematikNet * 1.24 +
      tytScores?.fBilimleriNet * 1.26 +
      aytScores?.matematikNet * 2.82 +
      aytScores?.fizikNet * 2.48 +
      aytScores?.kimyaNet * 2.94 +
      aytScores?.biyolojiNet * 3.1 +
      128.23;
    console.log("aytScores", aytScores);

    let newResultsTYT = {
      puanTuru: "TYT",
      hamPuan: tytHamPuan,
      yerlestirmePuani: tytHamPuan + ekPuan,
    };

    let newResultsSAY = {
      puanTuru: "SAY",
      hamPuan: sayHamPuan,
      yerlestirmePuani: sayHamPuan + ekPuan,
    };

    setScoreResults((prevResults: any) => {
      return prevResults.map((result: any) => {
        if (result.puanTuru === newResultsTYT.puanTuru) {
          return {
            ...result,
            ...newResultsTYT,
          };
        }
        if (result.puanTuru === newResultsSAY.puanTuru) {
          return {
            ...result,
            ...newResultsSAY,
          };
        }
        return result;
      });
    });
  };

  return (
    <>
      <div className="card">
        <h5>SONUÇLAR</h5>
        <DataTable value={scoreResults} tableStyle={{ minWidth: "10rem" }}>
          <Column field="puanTuru" header="Puan Türü"></Column>
          <Column field="hamPuan" header="Ham Puan"></Column>
          <Column field="yerlestirmePuani" header="Yerleştirme Puanı"></Column>
        </DataTable>
      </div>
      <div>
        <Button
          label="Hesapla"
          onClick={scoreCalculate}
          className="p-button-success w-5 ml-4"
          autoFocus
        />
        <Button
          label="Temizle"
          onClick={() => {}}
          className="p-button-danger w-5 ml-4"
        />
      </div>
    </>
  );
};

export default PuanSonucları;
