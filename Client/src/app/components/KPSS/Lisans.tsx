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
  genelYetenekDogru?: number;
  genelYetenekYanlis?: number;
  genelYetenekNet?: number;
  genelKulturDogru?: number;
  genelKulturYanlis?: number;
  genelKulturNet?: number;
  egitimBilimleriDogru?: number;
  egitimBilimleriYanlis?: number;
  egitimBilimleriNet?: number;
  hukukDogru?: number;
  hukukYanlis?: number;
  hukukNet?: number;
  iktisatDogru?: number;
  iktisatYanlis?: number;
  iktisatNet?: number;
  isletmeDogru?: number;
  isletmeYanlis?: number;
  isletmeNet?: number;
  maliyeDogru?: number;
  maliyeYanlis?: number;
  maliyeNet?: number;
  muhasebeDogru?: number;
  muhasebeYanlis?: number;
  muhasebeNet?: number;
  calismaEkonomisiDogru?: number;
  calismaEkonomisiYanlis?: number;
  calismaEkonomisiNet?: number;
  istatistikDogru?: number;
  istatistikYanlis?: number;
  istatistikNet?: number;
  kamuYonetimiDogru?: number;
  kamuYonetimiYanlis?: number;
  kamuYonetimiNet?: number;
  uİliskilerDogru?: number;
  uİliskilerYanlis?: number;
  uİliskilerNet?: number;
}

interface Params {
  setAytScores: any;
  setLisansScores: any;
  toggleReset: boolean;
}

const Lisans = ({ setAytScores, setLisansScores, toggleReset }: Params) => {
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
      genelYetenekDogru: 0,
      genelYetenekYanlis: 0,
      genelYetenekNet: 0,
      genelKulturDogru: 0,
      genelKulturYanlis: 0,
      genelKulturNet: 0,
      egitimBilimleriDogru: 0,
      egitimBilimleriYanlis: 0,
      egitimBilimleriNet: 0,
      hukukDogru: 0,
      hukukYanlis: 0,
      hukukNet: 0,
      iktisatDogru: 0,
      iktisatYanlis: 0,
      iktisatNet: 0,
      isletmeDogru: 0,
      isletmeYanlis: 0,
      isletmeNet: 0,
      maliyeDogru: 0,
      maliyeYanlis: 0,
      maliyeNet: 0,
      muhasebeDogru: 0,
      muhasebeYanlis: 0,
      muhasebeNet: 0,
      calismaEkonomisiDogru: 0,
      calismaEkonomisiYanlis: 0,
      calismaEkonomisiNet: 0,
      istatistikDogru: 0,
      istatistikYanlis: 0,
      istatistikNet: 0,
      kamuYonetimiDogru: 0,
      kamuYonetimiYanlis: 0,
      kamuYonetimiNet: 0,
      uİliskilerDogru: 0,
      uİliskilerYanlis: 0,
      uİliskilerNet: 0
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

  const genelYetenekDogru = watch("genelYetenekDogru");
  const genelYetenekYanlis = watch("genelYetenekYanlis");
  const genelYetenekNet = calculateNet(genelYetenekDogru, genelYetenekYanlis);

  const genelKulturDogru = watch("genelKulturDogru");
  const genelKulturYanlis = watch("genelKulturYanlis");
  const genelKulturNet = calculateNet(genelKulturDogru, genelKulturYanlis);

  const egitimBilimleriDogru = watch("egitimBilimleriDogru");
  const egitimBilimleriYanlis = watch("egitimBilimleriYanlis");
  const egitimBilimleriNet = calculateNet(egitimBilimleriDogru, egitimBilimleriYanlis);

  const hukukDogru = watch("hukukDogru");
  const hukukYanlis = watch("hukukYanlis");
  const hukukNet = calculateNet(hukukDogru, hukukYanlis);

  const iktisatDogru = watch("iktisatDogru");
  const iktisatYanlis = watch("iktisatYanlis");
  const iktisatNet = calculateNet(iktisatDogru, iktisatYanlis);

  const isletmeDogru = watch("isletmeDogru");
  const isletmeYanlis = watch("isletmeYanlis");
  const isletmeNet = calculateNet(isletmeDogru, isletmeYanlis);

  const maliyeDogru = watch("maliyeDogru");
  const maliyeYanlis = watch("maliyeYanlis");
  const maliyeNet = calculateNet(maliyeDogru, maliyeYanlis);

  const muhasebeDogru = watch("muhasebeDogru");
  const muhasebeYanlis = watch("muhasebeYanlis");
  const muhasebeNet = calculateNet(muhasebeDogru, muhasebeYanlis);

  const calismaEkonomisiDogru = watch("calismaEkonomisiDogru");
  const calismaEkonomisiYanlis = watch("calismaEkonomisiYanlis");
  const calismaEkonomisiNet = calculateNet(calismaEkonomisiDogru, calismaEkonomisiYanlis);

  const istatistikDogru = watch("istatistikDogru");
  const istatistikYanlis = watch("istatistikYanlis");
  const istatistikNet = calculateNet(istatistikDogru, istatistikYanlis);

  const kamuYonetimiDogru = watch("kamuYonetimiDogru");
  const kamuYonetimiYanlis = watch("kamuYonetimiYanlis");
  const kamuYonetimiNet = calculateNet(kamuYonetimiDogru, kamuYonetimiYanlis);

  const uİliskilerDogru = watch("uİliskilerDogru");
  const uİliskilerYanlis = watch("uİliskilerYanlis");
  const uİliskilerNet = calculateNet(uİliskilerDogru, uİliskilerYanlis);

  useEffect(() => {
    setAytScores((prevValues: any) => {
      return {
        ...prevValues,
        genelYetenekNet,
        genelKulturNet,
        egitimBilimleriNet,
        hukukNet,
        iktisatNet,
        isletmeNet,
        maliyeNet,
        muhasebeNet,
        calismaEkonomisiNet,
        istatistikNet,
        kamuYonetimiNet,
        uİliskilerNet
      };
    });
  }, [
    genelYetenekNet,
    genelKulturNet,
    egitimBilimleriNet,
    hukukNet,
    iktisatNet,
    isletmeNet,
    maliyeNet,
    muhasebeNet,
    calismaEkonomisiNet,
    istatistikNet,
    kamuYonetimiNet,
    uİliskilerNet
  ]);

  useEffect(() => {
    reset();
  }, [toggleReset]);

  const onSubmit = (data: any) => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <h5>AYT</h5>
          <div className="grid p-fluid mt-3">
            <div className="field grid col-12 md:col-3">
              <span>Genel Yetenek</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="genelYetenekDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={60}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.genelYetenekDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="genelYetenekYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof genelYetenekDogru === "number"
                          ? 60 - genelYetenekDogru
                          : 60
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.genelYetenekYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("genelYetenekNet")}
                  style={{ width: "100%" }}
                  value={
                    genelYetenekNet !== undefined ? genelYetenekNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.genelYetenekNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Genel Kültür</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="genelKulturDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={60}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.genelKulturDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="genelKulturYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof genelKulturDogru === "number" ? 60 - genelKulturDogru : 60
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.genelKulturYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("genelKulturNet")}
                  style={{ width: "100%" }}
                  value={genelKulturNet !== undefined ? genelKulturNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.genelKulturNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Eğitim Bilimleri</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="egitimBilimleriDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={80}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.egitimBilimleriDogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="egitimBilimleriYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof egitimBilimleriDogru === "number"
                          ? 80 - egitimBilimleriDogru
                          : 80
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.egitimBilimleriYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("egitimBilimleriNet")}
                  style={{ width: "100%" }}
                  value={
                    egitimBilimleriNet !== undefined ? egitimBilimleriNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.egitimBilimleriNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Hukuk</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="hukukDogru"
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
                <p style={{ color: "red" }}>{errors?.hukukDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="hukukYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof hukukDogru === "number" ? 11 - hukukDogru : 11
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.hukukYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("hukukNet")}
                  style={{ width: "100%" }}
                  value={hukukNet !== undefined ? hukukNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.hukukNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>İktisat</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="iktisatDogru"
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
                  {errors?.iktisatDogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="iktisatYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof iktisatDogru === "number"
                          ? 11 - iktisatDogru
                          : 11
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.iktisatYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("iktisatNet")}
                  style={{ width: "100%" }}
                  value={
                    iktisatNet !== undefined ? iktisatNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.iktisatNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>İşletme</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="isletmeDogru"
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
                <p style={{ color: "red" }}>{errors?.isletmeDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="isletmeYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof isletmeDogru === "number"
                          ? 12 - isletmeDogru
                          : 12
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.isletmeYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("isletmeNet")}
                  style={{ width: "100%" }}
                  value={isletmeNet !== undefined ? isletmeNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.isletmeNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Maliye</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="maliyeDogru"
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
                <p style={{ color: "red" }}>{errors?.maliyeDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="maliyeYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={typeof maliyeDogru === "number" ? 6 - maliyeDogru : 6}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.maliyeYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("maliyeNet")}
                  style={{ width: "100%" }}
                  value={maliyeNet !== undefined ? maliyeNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.maliyeNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Muhasebe</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="muhasebeDogru"
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
                  {errors?.muhasebeDogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="muhasebeYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof muhasebeDogru === "number"
                          ? 40 - muhasebeDogru
                          : 40
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.muhasebeYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("muhasebeNet")}
                  style={{ width: "100%" }}
                  value={
                    muhasebeNet !== undefined ? muhasebeNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.muhasebeNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Çalışma Ekonomisi</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="calismaEkonomisiDogru"
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
                <p style={{ color: "red" }}>{errors?.calismaEkonomisiDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="calismaEkonomisiYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof calismaEkonomisiDogru === "number" ? 40 - calismaEkonomisiDogru : 40
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.calismaEkonomisiYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("calismaEkonomisiNet")}
                  style={{ width: "100%" }}
                  value={calismaEkonomisiNet !== undefined ? calismaEkonomisiNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.calismaEkonomisiNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>İstatistik</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="istatistikDogru"
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
                <p style={{ color: "red" }}>{errors?.istatistikDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="istatistikYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof istatistikDogru === "number" ? 40 - istatistikDogru : 40
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.istatistikYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("istatistikNet")}
                  style={{ width: "100%" }}
                  value={istatistikNet !== undefined ? istatistikNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.istatistikNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Kamu Yönetimi</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="kamuYonetimiDogru"
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
                <p style={{ color: "red" }}>{errors?.kamuYonetimiDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="kamuYonetimiYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof kamuYonetimiDogru === "number"
                          ? 40 - kamuYonetimiDogru
                          : 40
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.kamuYonetimiYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("kamuYonetimiNet")}
                  style={{ width: "100%" }}
                  value={
                    kamuYonetimiNet !== undefined ? kamuYonetimiNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.kamuYonetimiNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Uluslararası İlişkiler</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="uİliskilerDogru"
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
                <p style={{ color: "red" }}>{errors?.uİliskilerDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="uİliskilerYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof uİliskilerDogru === "number"
                          ? 40 - uİliskilerDogru
                          : 40
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.uİliskilerYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("uİliskilerNet")}
                  style={{ width: "100%" }}
                  value={
                    uİliskilerNet !== undefined ? uİliskilerNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.uİliskilerNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Lisans;
