"use client";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

interface IAYTInputs {
  edebiyatDogru?: number;
  edebiyatYanlis?: number;
  edebiyatNet?: number;
  tarih1Dogru?: number;
  tarih1Yanlis?: number;
  tarih1Net?: number;
  cografya1Dogru?: number;
  cografya1Yanlis?: number;
  cografya1Net?: number;
  tarih2Dogru?: number;
  tarih2Yanlis?: number;
  tarih2Net?: number;
  cografya2Dogru?: number;
  cografya2Yanlis?: number;
  cografya2Net?: number;
  felsefeDogru?: number;
  felsefeYanlis?: number;
  felsefeNet?: number;
  dinDogru?: number;
  dinYanlis?: number;
  dinNet?: number;
  matematikDogru?: number;
  matematikYanlis?: number;
  matematikNet?: number;
  fizikDogru?: number;
  fizikYanlis?: number;
  fizikNet?: number;
  kimyaDogru?: number;
  kimyaYanlis?: number;
  kimyaNet?: number;
  biyolojiDogru?: number;
  biyolojiYanlis?: number;
  biyolojiNet?: number;
}

interface Params {
  setAytScores: any;
  toggleReset: boolean;
}

const AYTPuanHesaplama = ({ setAytScores, toggleReset }: Params) => {
  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
    reset,
  } = useForm<IAYTInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      edebiyatDogru: 0,
      edebiyatYanlis: 0,
      edebiyatNet: 0,
      tarih1Dogru: 0,
      tarih1Yanlis: 0,
      tarih1Net: 0,
      cografya1Dogru: 0,
      cografya1Yanlis: 0,
      cografya1Net: 0,
      tarih2Dogru: 0,
      tarih2Yanlis: 0,
      tarih2Net: 0,
      cografya2Dogru: 0,
      cografya2Yanlis: 0,
      cografya2Net: 0,
      felsefeDogru: 0,
      felsefeYanlis: 0,
      felsefeNet: 0,
      dinDogru: 0,
      dinYanlis: 0,
      dinNet: 0,
      matematikDogru: 0,
      matematikYanlis: 0,
      matematikNet: 0,
      fizikDogru: 0,
      fizikYanlis: 0,
      fizikNet: 0,
      kimyaDogru: 0,
      kimyaYanlis: 0,
      kimyaNet: 0,
      biyolojiDogru: 0,
      biyolojiYanlis: 0,
      biyolojiNet: 0,
    },
  });

  // const calculateTurkceNet = (dogru:number|undefined, yanlis: number|undefined) => {
  //   const net = dogru - yanlis / 4;
  //   return net;
  // };

  const calculateNet = (
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

  const edebiyatDogru = watch("edebiyatDogru");
  const edebiyatYanlis = watch("edebiyatYanlis");
  const edebiyatNet = calculateNet(edebiyatDogru, edebiyatYanlis);

  const tarih1Dogru = watch("tarih1Dogru");
  const tarih1Yanlis = watch("tarih1Yanlis");
  const tarih1Net = calculateNet(tarih1Dogru, tarih1Yanlis);

  const cografya1Dogru = watch("cografya1Dogru");
  const cografya1Yanlis = watch("cografya1Yanlis");
  const cografya1Net = calculateNet(cografya1Dogru, cografya1Yanlis);

  const tarih2Dogru = watch("tarih2Dogru");
  const tarih2Yanlis = watch("tarih2Yanlis");
  const tarih2Net = calculateNet(tarih2Dogru, tarih2Yanlis);

  const cografya2Dogru = watch("cografya2Dogru");
  const cografya2Yanlis = watch("cografya2Yanlis");
  const cografya2Net = calculateNet(cografya2Dogru, cografya2Yanlis);

  const felsefeDogru = watch("felsefeDogru");
  const felsefeYanlis = watch("felsefeYanlis");
  const felsefeNet = calculateNet(felsefeDogru, felsefeYanlis);

  const dinDogru = watch("dinDogru");
  const dinYanlis = watch("dinYanlis");
  const dinNet = calculateNet(dinDogru, dinYanlis);

  const matematikDogru = watch("matematikDogru");
  const matematikYanlis = watch("matematikYanlis");
  const matematikNet = calculateNet(matematikDogru, matematikYanlis);

  const fizikDogru = watch("fizikDogru");
  const fizikYanlis = watch("fizikYanlis");
  const fizikNet = calculateNet(fizikDogru, fizikYanlis);

  const kimyaDogru = watch("kimyaDogru");
  const kimyaYanlis = watch("kimyaYanlis");
  const kimyaNet = calculateNet(kimyaDogru, kimyaYanlis);

  const biyolojiDogru = watch("biyolojiDogru");
  const biyolojiYanlis = watch("biyolojiYanlis");
  const biyolojiNet = calculateNet(biyolojiDogru, biyolojiYanlis);

  useEffect(() => {
    setAytScores((prevValues: any) => {
      return {
        ...prevValues,
        edebiyatNet,
        tarih1Net,
        cografya1Net,
        tarih2Net,
        cografya2Net,
        felsefeNet,
        dinNet,
        matematikNet,
        fizikNet,
        kimyaNet,
        biyolojiNet,
      };
    });
  }, [
    edebiyatNet,
    tarih1Net,
    cografya1Net,
    tarih2Net,
    cografya2Net,
    felsefeNet,
    dinNet,
    matematikNet,
    fizikNet,
    kimyaNet,
    biyolojiNet,
  ]);

  useEffect(() => {
    reset();
  }, [toggleReset]);

  const onSubmit = (data: any) => {

  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <h5>AYT</h5>
          <div className="grid p-fluid mt-3">
            <div className="field grid col-12 md:col-3">
              <span>Türk Dili ve Edebiyatı</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="edebiyatDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={24}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.edebiyatDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="edebiyatYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof edebiyatDogru === "number"
                          ? 24 - edebiyatDogru
                          : 24
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.edebiyatYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("edebiyatNet")}
                  style={{ width: "100%" }}
                  value={
                    edebiyatNet !== undefined ? edebiyatNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.edebiyatNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Tarih-1</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="tarih1Dogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={10}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.tarih1Dogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="tarih1Yanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof tarih1Dogru === "number" ? 10 - tarih1Dogru : 10
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.tarih1Dogru?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("tarih1Net")}
                  style={{ width: "100%" }}
                  value={tarih1Net !== undefined ? tarih1Net.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.tarih1Net?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Coğrafya-1</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="cografya1Dogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={6}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.cografya1Dogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="cografya1Yanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof cografya1Dogru === "number"
                          ? 6 - cografya1Dogru
                          : 6
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.cografya1Yanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("cografya1Net")}
                  style={{ width: "100%" }}
                  value={
                    cografya1Net !== undefined ? cografya1Net.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.cografya1Net?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Tarih-2</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="tarih2Dogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={11}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.tarih2Dogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="tarih2Yanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof tarih2Dogru === "number" ? 11 - tarih2Dogru : 11
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.tarih2Yanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("tarih2Net")}
                  style={{ width: "100%" }}
                  value={tarih2Net !== undefined ? tarih2Net.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.tarih2Net?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Coğrafya-2</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="cografya2Dogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={11}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.cografya2Dogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="cografya2Yanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof cografya2Dogru === "number"
                          ? 11 - cografya2Dogru
                          : 11
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.cografya2Yanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("tarih2Net")}
                  style={{ width: "100%" }}
                  value={
                    cografya2Net !== undefined ? cografya2Net.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.cografya2Net?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Felsefe Grubu</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="felsefeDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={12}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.felsefeDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="felsefeYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof felsefeDogru === "number"
                          ? 12 - felsefeDogru
                          : 12
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.felsefeYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("felsefeNet")}
                  style={{ width: "100%" }}
                  value={felsefeNet !== undefined ? felsefeNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.felsefeNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Din Kült. ve Ahl. Bilgisi / Ek Felsefe Grubu</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="dinDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={6}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.dinDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="dinYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={typeof dinDogru === "number" ? 6 - dinDogru : 6}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.dinYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("dinNet")}
                  style={{ width: "100%" }}
                  value={dinNet !== undefined ? dinNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.dinNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Matematik</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="matematikDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={40}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.matematikDogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="matematikYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof matematikDogru === "number"
                          ? 40 - matematikDogru
                          : 40
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.matematikYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("matematikNet")}
                  style={{ width: "100%" }}
                  value={
                    matematikNet !== undefined ? matematikNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.matematikNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Fizik</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="fizikDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={14}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.fizikDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="fizikYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof fizikDogru === "number" ? 14 - fizikDogru : 14
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.fizikYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("fizikNet")}
                  style={{ width: "100%" }}
                  value={fizikNet !== undefined ? fizikNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.fizikNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Kimya</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="kimyaDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={13}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.kimyaDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="kimyaYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof kimyaDogru === "number" ? 13 - kimyaDogru : 13
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.kimyaYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("kimyaNet")}
                  style={{ width: "100%" }}
                  value={kimyaNet !== undefined ? kimyaNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.kimyaNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Biyoloji</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="biyolojiDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={13}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.biyolojiDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="biyolojiYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof biyolojiDogru === "number"
                          ? 13 - biyolojiDogru
                          : 13
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.biyolojiYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("biyolojiNet")}
                  style={{ width: "100%" }}
                  value={
                    biyolojiNet !== undefined ? biyolojiNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.biyolojiNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AYTPuanHesaplama;