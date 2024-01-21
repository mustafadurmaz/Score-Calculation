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
import LGSTable from "./LGSTable";

interface ITYTInputs {
  turkceDogru?: number;
  turkceYanlis?: number;
  turkceNet?: number;
  inkilapDogru?: number;
  inkilapYanlis?: number;
  inkilapNet?: number;
  dinDogru?: number;
  dinYanlis?: number;
  dinNet?: number;
  sBilimlerDogru?: number;
  sBilimlerYanlis?: number;
  sBilimlerNet?: number;
  tMatematikDogru?: number;
  tMatematikYanlis?: number;
  tMatematikNet?: number;
  fBilimleriDogru?: number;
  fBilimleriYanlis?: number;
  fBilimleriNet?: number;
}

interface Params {
  lgsScores: any;
  setLgsScores: any;
  toggleReset: boolean;
  setToggleReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const LGSPuanSonucları = ({
  lgsScores,
  setLgsScores,
  toggleReset,
  setToggleReset,
}: Params) => {
  const [showLGSTable, setShowLGSTable] =
    useState<boolean>(false);
  const [scoreResults, setScoreResults] = useState([
    {
      puanTuru: "LGS Puanı",
      hamPuan: "-",
      yerlestirmePuani: "-",
    }
  ]);



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

  };

  const scoreCalculate = () => {

    let lgsHamPuan =
    lgsScores?.turkceNet * 3.8850 +
    lgsScores?.inkilapNet * 1.7190 +
    lgsScores?.dinNet * 1.6400 +
    lgsScores?.sBilimlerNet * 1.4990 +
    lgsScores?.tMatematikNet * 4.902 +
    lgsScores?.fBilimleriNet * 3.6870 + 201.94;

    lgsHamPuan = + lgsHamPuan.toFixed(3);
    // let tytHamPuan =
    //   tytScores?.turkceNet * 2.89 +
    //   tytScores?.sBilimlerNet * 3.02 +
    //   tytScores?.tMatematikNet * 3.02 +
    //   tytScores?.fBilimleriNet * 3.06 +
    //   141.9;

    // tytHamPuan = +tytHamPuan.toFixed(3);

    let newResultsLGS = {
      puanTuru: "LGS Puannı",
      hamPuan: lgsHamPuan,
      yerlestirmePuani: lgsHamPuan ,
    };

    // let newResultsSAY = {
    //   puanTuru: "SAY",
    //   hamPuan: sayHamPuan,
    //   yerlestirmePuani: sayHamPuan + ekPuan,
    // };

    // let newResultsEA = {
    //   puanTuru: "EA",
    //   hamPuan: eaHamPuan,
    //   yerlestirmePuani: eaHamPuan + ekPuan,
    // };

    // let newResultsSOZ = {
    //   puanTuru: "SÖZ",
    //   hamPuan: sozHamPuan,
    //   yerlestirmePuani: sozHamPuan + ekPuan,
    // };

    setScoreResults((prevResults: any) => {
      return prevResults.map((result: any) => {
          return {
            ...result,
            ...newResultsLGS,
          };
        return result;
      });
    });
  };

  const clearScores = () => {
    setToggleReset(!toggleReset);
    setLgsScores({
      turkceNet: 0,
      sBilimlerNet: 0,
      tMatematikNet: 0,
      fBilimleriNet: 0,
      inkilapNet: 0,
      dinNet: 0
    });
    setScoreResults([
      {
        puanTuru: "LGS Puanı",
        hamPuan: "-",
        yerlestirmePuani: "-",
      }
    ]);
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
          onClick={clearScores}
          className="p-button-danger w-5 ml-6"
        />
        <Button
          label="Lise Bul"
          onClick={() => {
            setShowLGSTable(true);
          }}
          className="p-button-info w-10 mt-3 ml-6"
          autoFocus
        />
      </div>

      

      {showLGSTable === true && <LGSTable 
      showLGSTable={showLGSTable} 
      setShowLGSTable={setShowLGSTable}
      scoreResults = {scoreResults} />}
    </>
  );
};

export default LGSPuanSonucları;
