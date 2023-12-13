"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Column } from "primereact/column";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import YKSService from "../../services/YKS/YKS";

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
  tytScores?: any;
}

const UniversityTable = ({ tytScores }: Params) => {
  const [universities, setUniversities] = useState([]);
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
      turkceNet: 0,
      turkceDogru: 0,
    },
  });

  const getUniversities = (isClear = false) => {
    setLoading(true);
    YKSService.getAllUniversities()
      .then((response) => {
        console.log("component response data", response.data);
        setUniversities(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        // toast?.current?.show({
        //   severity: "error",
        //   summary: t("Error"),
        //   detail: err.response ? err.response.data.message : err.message,
        //   life: 3000,
        // });
        setLoading(false);
      });
  };

  useEffect(() => {
    getUniversities();
  }, []);

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <>
      <Dialog
        header="Üniversiteler"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="card">
          <DataTable
            value={universities}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="UniversiteAdi"
              header="Üniversite"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="ProgramAdi"
              header="Bölüm"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="TabanPuan"
              header="Puan"
              style={{ width: "25%" }}
            ></Column>
            <Column field="Sehir" header="İl" style={{ width: "25%" }}></Column>
          </DataTable>
        </div>
      </Dialog>
    </>
  );
};

export default UniversityTable;
