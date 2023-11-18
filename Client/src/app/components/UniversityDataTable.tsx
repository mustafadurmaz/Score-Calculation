"use client";
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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
  tytScores?: any;
}

const UniversityDataTable = ({
  tytScores,
}: Params) => {

  const [customers, setCustomers] = useState([]);

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


  return (
    <>
      <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Üniversite" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Bölüm" style={{ width: '25%' }}></Column>
                <Column field="company" header="Puan" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="İl" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    </>
  );
};

export default UniversityDataTable;
