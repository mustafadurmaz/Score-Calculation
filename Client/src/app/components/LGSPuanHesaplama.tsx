"use client";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

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
  diplomaNotu?: number;
  OBP?: number;
}

interface Params {
  setLgsScores: any;
  toggleReset: boolean;
}

const LGSPuanHesaplama = ({ setLgsScores, toggleReset }: Params) => {
  const [isEnroll, setIsEnroll] = useState<any>(false);

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
      turkceDogru: 0,
      turkceYanlis: 0,
      turkceNet: 0,
      inkilapDogru: 0,
      inkilapYanlis: 0,
      inkilapNet: 0,
      dinDogru: 0,
      dinYanlis: 0,
      dinNet: 0,
      sBilimlerDogru: 0,
      sBilimlerYanlis: 0,
      sBilimlerNet: 0,
      tMatematikDogru: 0,
      tMatematikYanlis: 0,
      tMatematikNet: 0,
      fBilimleriDogru: 0,
      fBilimleriYanlis: 0,
      fBilimleriNet: 0,
      // diplomaNotu: 0,
      OBP: 0,
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

    const net = dogru - yanlis / 3;
    return net;
  };

  const turkceDogru = watch("turkceDogru");
  const turkceYanlis = watch("turkceYanlis");
  const turkceNet = calculateNet(turkceDogru, turkceYanlis);

  const inkilapDogru = watch("inkilapDogru");
  const inkilapYanlis = watch("inkilapYanlis");
  const inkilapNet = calculateNet(inkilapDogru, inkilapYanlis);
  
  const dinDogru = watch("dinDogru");
  const dinYanlis = watch("dinYanlis");
  const dinNet = calculateNet(dinDogru, dinYanlis);

  const sBilimlerDogru = watch("sBilimlerDogru");
  const sBilimlerYanlis = watch("sBilimlerYanlis");
  const sBilimlerNet = calculateNet(sBilimlerDogru, sBilimlerYanlis);

  const tMatematikDogru = watch("tMatematikDogru");
  const tMatematikYanlis = watch("tMatematikYanlis");
  const tMatematikNet = calculateNet(tMatematikDogru, tMatematikYanlis);

  const fBilimleriDogru = watch("fBilimleriDogru");
  const fBilimleriYanlis = watch("fBilimleriYanlis");
  const fBilimleriNet = calculateNet(fBilimleriDogru, fBilimleriYanlis);

  const diplomaNotu = watch("diplomaNotu") || 0;
  const OBP = watch("OBP") || 0;

  useEffect(() => {
    setLgsScores((prevValues: any) => {
      return {
        ...prevValues,
        turkceNet,
        inkilapNet,
        dinNet,
        sBilimlerNet,
        tMatematikNet,
        fBilimleriNet,
        diplomaNotu,
        isEnroll,
      };
    });
  }, [
    turkceNet,
    inkilapNet,
    dinNet,
    sBilimlerNet,
    tMatematikNet,
    fBilimleriNet,
    diplomaNotu,
    isEnroll,
  ]);

  const onSubmit = (data: any) => {

  };

  useEffect(() => {
    reset();
    setIsEnroll(false);
  }, [toggleReset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <h5>LGS</h5>
          <div className="grid p-fluid mt-3">
            <div className="field grid col-12 md:col-3">
              <span>Türkçe</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="turkceDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={20}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.turkceDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="turkceYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof turkceDogru === "number" ? 20 - turkceDogru : 20
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.turkceYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("turkceNet")}
                  style={{ width: "100%" }}
                  value={turkceNet !== undefined ? turkceNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.turkceNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>T.C. İnk. Tarihi</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="inkilapDogru"
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
                <p style={{ color: "red" }}>{errors?.inkilapDogru?.message}</p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="inkilapYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof inkilapDogru === "number" ? 10 - inkilapDogru : 10
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>{errors?.inkilapYanlis?.message}</p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("inkilapNet")}
                  style={{ width: "100%" }}
                  value={inkilapNet !== undefined ? inkilapNet.toString() : ""}
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.inkilapNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Din Kültürü ve A.B.</span>
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
                      max={10}
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
                      max={
                        typeof dinDogru === "number" ? 10 - dinDogru : 10
                      }
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
              <span>Yabancı Dil</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="sBilimlerDogru"
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
                <p style={{ color: "red" }}>
                  {errors?.sBilimlerDogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="sBilimlerYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof sBilimlerDogru === "number"
                          ? 10 - sBilimlerDogru
                          : 10
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.sBilimlerYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("sBilimlerNet")}
                  style={{ width: "100%" }}
                  value={
                    sBilimlerNet !== undefined ? sBilimlerNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.sBilimlerNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Matematik</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="tMatematikDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={20}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.tMatematikDogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="tMatematikYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof tMatematikDogru === "number"
                          ? 20 - tMatematikDogru
                          : 20
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.tMatematikYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("tMatematikNet")}
                  style={{ width: "100%" }}
                  value={
                    tMatematikNet !== undefined ? tMatematikNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.tMatematikNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>

            <div className="field grid col-12 md:col-3">
              <span>Fen Bilimleri</span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="fBilimleriDogru"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={20}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.fBilimleriDogru?.message}
                </p>
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="fBilimleriYanlis"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={
                        typeof fBilimleriDogru === "number"
                          ? 20 - fBilimleriDogru
                          : 20
                      }
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                    />
                  )}
                />
                <p style={{ color: "red" }}>
                  {errors?.fBilimleriYanlis?.message}
                </p>
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText
                  autoComplete="off"
                  {...register("fBilimleriNet")}
                  style={{ width: "100%" }}
                  value={
                    fBilimleriNet !== undefined ? fBilimleriNet.toString() : ""
                  }
                  disabled
                  type="number"
                />
                <p style={{ color: "red" }}>{errors?.fBilimleriNet?.message}</p>
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>
          </div>
        </div>

        {/* <div className="card p-fluid">
          <h5>Ortaöğretim Başarı Puanı</h5>

          <div className="field grid">
            <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-3">
              Diploma Notu
            </label>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <Controller
                  name="diplomaNotu"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      style={{ width: "100%" }}
                      className="p-inputwrapper-focus"
                      min={0}
                      max={100}
                      onValueChange={(e) => {
                        field.onChange(e.value);
                      }}
                      value={OBP !== 0 ? OBP / 5 : field.value}
                    />
                  )}
                />
              </span>
            </div>
          </div>

        </div> */}
      </form>
    </>
  );
};

export default LGSPuanHesaplama;
