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
import UniversityTable from "./UniversityTable";

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
  setTytScores: any;
  aytScores: any;
  setAytScores: any;
  toggleReset: boolean;
  setToggleReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const PuanSonucları = ({
  tytScores,
  setTytScores,
  aytScores,
  setAytScores,
  toggleReset,
  setToggleReset,
}: Params) => {
  const [showUniversityTable, setShowUniversityTable] =
    useState<boolean>(false);
  const [scoreResults, setScoreResults] = useState([
    {
      puanTuru: "TYT",
      hamPuan: "-",
      yerlestirmePuani: "-",
    },
    {
      puanTuru: "SAY",
      hamPuan: "-",
      yerlestirmePuani: "-",
    },
    {
      puanTuru: "EA",
      hamPuan: "-",
      yerlestirmePuani: "-",
    },
    {
      puanTuru: "SÖZ",
      hamPuan: "-",
      yerlestirmePuani: "-",
    },
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
    let ekPuan;

    if (tytScores?.isEnroll === false) {
      ekPuan = tytScores?.diplomaNotu * 0.6;
      ekPuan = +ekPuan.toFixed(3);
    } else {
      ekPuan = tytScores?.diplomaNotu * 0.3;
      ekPuan = +ekPuan.toFixed(3);
    }

    if (tytScores?.diplomaNotu === 0) {
      alert("Lütfen Diploma Notunuzu Girin!");
      return;
    }

    let tytHamPuan =
      tytScores?.turkceNet * 2.89 +
      tytScores?.sBilimlerNet * 3.02 +
      tytScores?.tMatematikNet * 3.02 +
      tytScores?.fBilimleriNet * 3.06 +
      141.9;

    tytHamPuan = +tytHamPuan.toFixed(3);

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

    sayHamPuan = +sayHamPuan.toFixed(3);

    let eaHamPuan =
      tytScores?.turkceNet * 1.17 +
      tytScores?.sBilimlerNet * 1.22 +
      tytScores?.tMatematikNet * 1.22 +
      tytScores?.fBilimleriNet * 1.23 +
      aytScores?.matematikNet * 2.78 +
      aytScores?.edebiyatNet * 3.14 +
      aytScores?.tarih1Net * 3.27 +
      aytScores?.cografya1Net * 3.06 +
      128.96;

    eaHamPuan = +eaHamPuan.toFixed(3);

    let sozHamPuan =
      tytScores?.turkceNet * 1.13 +
      tytScores?.sBilimlerNet * 1.18 +
      tytScores?.tMatematikNet * 1.18 +
      tytScores?.fBilimleriNet * 1.19 +
      aytScores?.edebiyatNet * 3.03 +
      aytScores?.tarih1Net * 3.16 +
      aytScores?.cografya1Net * 2.96 +
      aytScores?.tarih2Net * 3.07 +
      aytScores?.cografya2Net * 2.99 +
      aytScores?.felsefeNet * 3.67 +
      aytScores?.dinNet * 2.81 +
      128.44;

    sozHamPuan = +sozHamPuan.toFixed(3);

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

    let newResultsEA = {
      puanTuru: "EA",
      hamPuan: eaHamPuan,
      yerlestirmePuani: eaHamPuan + ekPuan,
    };

    let newResultsSOZ = {
      puanTuru: "SÖZ",
      hamPuan: sozHamPuan,
      yerlestirmePuani: sozHamPuan + ekPuan,
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
        if (result.puanTuru === newResultsEA.puanTuru) {
          return {
            ...result,
            ...newResultsEA,
          };
        }
        if (result.puanTuru === newResultsSOZ.puanTuru) {
          return {
            ...result,
            ...newResultsSOZ,
          };
        }
        return result;
      });
    });
  };

  const clearScores = () => {
    setToggleReset(!toggleReset);
    setTytScores({
      turkceNet: 0,
      sBilimlerNet: 0,
      tMatematikNet: 0,
      fBilimleriNet: 0,
      diplomaNotu: 0,
    });
    setAytScores({
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
    setScoreResults([
      {
        puanTuru: "TYT",
        hamPuan: "-",
        yerlestirmePuani: "-",
      },
      {
        puanTuru: "SAY",
        hamPuan: "-",
        yerlestirmePuani: "-",
      },
      {
        puanTuru: "EA",
        hamPuan: "-",
        yerlestirmePuani: "-",
      },
      {
        puanTuru: "SÖZ",
        hamPuan: "-",
        yerlestirmePuani: "-",
      },
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
          label="Üniversite Bul"
          onClick={() => {
            setShowUniversityTable(true);
          }}
          className="p-button-info w-10 mt-3 ml-6"
          autoFocus
        />
      </div>

      {showUniversityTable === true && <UniversityTable 
      showUniversityTable={showUniversityTable} 
      setShowUniversityTable={setShowUniversityTable}
      scoreResults = {scoreResults} />}
    </>
  );
};

export default PuanSonucları;
