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
  showUniversityTable: boolean;
  setShowUniversityTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityTable = ({
  tytScores,
  showUniversityTable,
  setShowUniversityTable,
}: Params) => {
  const [universities, setUniversities] = useState([]);
  const [totalUniversities, setTotalUniversities] = useState(500);
  const [loading, setLoading] = useState(false);
  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 0,
    sortField: null || undefined,
    sortOrder: 1,
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
    YKSService.getAllUniversities({
      page: lazyParams.page + 1,
      limit: lazyParams.rows,
    })
      .then((response) => {
        console.log("component response data", response.data);
        setUniversities(response.data.universities);
        setTotalUniversities(response.data.total)
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
  }, [lazyParams]);

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const onPage = (event: any) => {
    setLazyParams(event);
  };

  const onSort = (event: any) => {
    setLazyParams((prev) => {
      return { ...prev, ...event };
    });
  };

  const countTemplate = () => {
    const counts = ("Showing {first} to {last} of {totalRecords} records");
    return loading === true ? "Loading..." : counts;
  };

  return (
    <>
      <Dialog
        header="Üniversiteler"
        visible={showUniversityTable}
        onHide={() => setShowUniversityTable(false)}
        style={{ width: "100vh" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="card">
          <DataTable
            value={universities}
            paginator
            rowsPerPageOptions={[10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
            onPage={onPage}
            onSort={onSort}
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            totalRecords={totalUniversities}
            first={lazyParams.first}
            rows={lazyParams.rows}
            currentPageReportTemplate={countTemplate()}
            lazy
          >
            <Column
              field="ProgramKodu"
              header="Program Kodu"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="UniversiteTuru"
              header="Universite Türü"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="UniversiteAdi"
              header="Üniversite"
              style={{ width: "25%" }}
            ></Column>
            
            <Column
              field="ProgramAdi"
              header="Program Adı"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="FakulteYuksekOkulAdi"
              header="Fakülte"
              style={{ width: "25%" }}
            ></Column>
            <Column field="Sehir" header="İl" style={{ width: "25%" }}></Column>
            <Column
              field="PuanTuru"
              header="Puan Türü"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="Kontenjan"
              header="Kontenjan"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="TabanPuan"
              header="Taban Puan"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="TavanPuan"
              header="Tavan Puan"
              style={{ width: "25%" }}
            ></Column>
            
            
          </DataTable>
        </div>
      </Dialog>
    </>
  );
};

export default UniversityTable;
