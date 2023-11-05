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
}

const TYTPuanHesaplama = () => {
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

  const turkceDogru = watch("turkceDogru");
  const turkceYanlis = watch("turkceYanlis");
  const turkceNet = calculateNet(turkceDogru, turkceYanlis);

  const sBilimlerDogru = watch("sBilimlerDogru");
  const sBilimlerYanlis = watch("sBilimlerYanlis");
  const sBilimlerNet = calculateNet(sBilimlerDogru, sBilimlerYanlis);

  const tMatematikDogru = watch("tMatematikDogru");
  const tMatematikYanlis = watch("tMatematikYanlis");
  const tMatematikNet = calculateNet(tMatematikDogru, tMatematikYanlis);

  const fBilimleriDogru = watch("fBilimleriDogru");
  const fBilimleriYanlis = watch("fBilimleriYanlis");
  const fBilimleriNet = calculateNet(fBilimleriDogru, fBilimleriYanlis);

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        
            <div className="card p-fluid">
              <h5>TYT</h5>

              <div className="field grid">
                <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-3">
                  Türkçe
                </label>
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
                          max={40}
                          onValueChange={(e) => {
                            field.onChange(e.value);
                          }}
                        />
                      )}
                    />
                    <p style={{ color: "red" }}>
                      {errors?.turkceDogru?.message}
                    </p>
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
                            typeof turkceDogru === "number"
                              ? 40 - turkceDogru
                              : 40
                          }
                          onValueChange={(e) => {
                            field.onChange(e.value);
                          }}
                        />
                      )}
                    />
                    <p style={{ color: "red" }}>
                      {errors?.turkceYanlis?.message}
                    </p>
                    <label htmlFor="inputtext">Yanlış</label>
                  </span>
                </div>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceNet")}
                      style={{ width: "100%" }}
                      value={
                        turkceNet !== undefined ? turkceNet.toString() : ""
                      }
                      disabled
                      type="number"
                    />
                    <p style={{ color: "red" }}>{errors?.turkceNet?.message}</p>
                    <label htmlFor="inputtext">Net</label>
                  </span>
                </div>
              </div>

              <div className="field grid">
                <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-3">
                  Sosyal Bilimler
                </label>
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
                          max={20}
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
                              ? 20 - sBilimlerDogru
                              : 20
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
                        sBilimlerNet !== undefined
                          ? sBilimlerNet.toString()
                          : ""
                      }
                      disabled
                      type="number"
                    />
                    <p style={{ color: "red" }}>
                      {errors?.sBilimlerNet?.message}
                    </p>
                    <label htmlFor="inputtext">Net</label>
                  </span>
                </div>
              </div>

              <div className="field grid">
                <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-3">
                  Temel Matematik
                </label>
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
                          max={40}
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
                              ? 40 - tMatematikDogru
                              : 40
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
                        tMatematikNet !== undefined
                          ? tMatematikNet.toString()
                          : ""
                      }
                      disabled
                      type="number"
                    />
                    <p style={{ color: "red" }}>
                      {errors?.tMatematikNet?.message}
                    </p>
                    <label htmlFor="inputtext">Net</label>
                  </span>
                </div>
              </div>

              <div className="field grid">
                <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-3">
                  Fen Bilimleri
                </label>
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
                          max={40}
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
                        fBilimleriNet !== undefined
                          ? fBilimleriNet.toString()
                          : ""
                      }
                      disabled
                      type="number"
                    />
                    <p style={{ color: "red" }}>
                      {errors?.fBilimleriNet?.message}
                    </p>
                    <label htmlFor="inputtext">Net</label>
                  </span>
                </div>
              </div>
            </div>

      </form>
    </>
  );
};

export default TYTPuanHesaplama;
