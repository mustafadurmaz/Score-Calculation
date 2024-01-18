"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Column } from "primereact/column";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import LGSService from "../../services/LGS/LGS";
import LGSFİlter from "./LGSFİlter";

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
  showLGSTable: boolean;
  scoreResults?: any;
  setShowLGSTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const LGSTable = ({
  tytScores,
  showLGSTable,
  setShowLGSTable,
  scoreResults
}: Params) => {
  const [LGS, setLGS] = useState([]);
  const [totalLGS, setTotalLGS] = useState(500);
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

  const getLGS = (isClear = false) => {
    setLoading(true);
    // YKSService.getAllLGS()
    //   .then((response) => {

    //     setLGS(response.data);
    //     setTotalLGS(response.data.total)
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     // toast?.current?.show({
    //     //   severity: "error",
    //     //   summary: t("Error"),
    //     //   detail: err.response ? err.response.data.message : err.message,
    //     //   life: 3000,
    //     // });
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    getLGS();
  }, [lazyParams]);

  const onSubmit = (data: any) => {

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
    return loading === true ? counts : counts;
  };

  return (
    <>
      <Dialog
        header="Liseler"
        visible={showLGSTable}
        onHide={() => setShowLGSTable(false)}
        style={{ width: "100vh" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <LGSFİlter 
          lazyParams = {lazyParams}
          setTotalLGS = {setTotalLGS}
          setLGS = {setLGS}
          scoreResults = {scoreResults}
        />
        <div className="card mt-2">
          <DataTable
            value={LGS}
            paginator
            rowsPerPageOptions={[10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
            onPage={onPage}
            onSort={onSort}
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            totalRecords={totalLGS}
            first={lazyParams.first}
            rows={lazyParams.rows}
            currentPageReportTemplate={countTemplate()}
            lazy
          >

            <Column
              field="liseAdi"
              header="Lise Adı"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="alanTuru"
              header="Alan Türü"
              style={{ width: "25%" }}
            ></Column>
            
            <Column
              field="ogrenimDili"
              header="Öğrenim Dili"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="fakulte"
              header="Fakülte"
              style={{ width: "25%" }}
            ></Column>
            <Column field="il" header="İl" style={{ width: "25%" }}></Column>
            <Column field="ilce" header="İlçe" style={{ width: "25%" }}></Column>

            <Column
              field="puan2023"
              header="Puan-2023"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="puan2022"
              header="Puan-2022"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="kontenjan2023"
              header="Kontenjan-2023"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="kontenjan2022"
              header="Kontenjan-2022"
              style={{ width: "25%" }}
            ></Column>
            
            
          </DataTable>
        </div>
      </Dialog>
    </>
  );
};

export default LGSTable;
