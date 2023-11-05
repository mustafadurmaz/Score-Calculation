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

interface ITukceInputs {
  turkceDogru?: number;
  turkceYanlis?: number;
  turkceNet?: number;
}

const FormLayoutDemo = () => {
  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
    reset,
  } = useForm<ITukceInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      turkceNet: 0,
    },
  });

  // const calculateTurkceNet = (dogru:number|undefined, yanlis: number|undefined) => {
  //   const net = dogru - yanlis / 4;
  //   return net;
  // };

  const calculateTurkceNet = (
    dogru: number | undefined,
    yanlis: number | undefined
  ): number | undefined => {
    if (dogru === undefined || yanlis === undefined) {
      // Eğer herhangi bir parametre undefined ise, undefined döndür
      return undefined;
    }

    const net = dogru - yanlis / 4;
    return net;
  };

  const turkceDogru = watch("turkceDogru");
  const turkceYanlis = watch("turkceYanlis");
  const turkceNet = calculateTurkceNet(turkceDogru, turkceYanlis);

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="grid">
        <div className="col-12 md:col-4">
          <TYTPuanHesaplama />
        </div>
        <div className="col-12 md:col-4">
          <AYTPuanHesaplama />
        </div>
      </div>
    </>
  );
};

export default FormLayoutDemo;
