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
}

interface Params {
  setAytScores: any;
  toggleReset: boolean;
}

const DinHizmetleri = ({ setAytScores, toggleReset }: Params) => {
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


  useEffect(() => {
    setAytScores((prevValues: any) => {
      return {
        ...prevValues,
        genelYetenekNet,
        genelKulturNet,
      };
    });
  }, [
    genelYetenekNet,
    genelKulturNet
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

          </div>
        </div>
      </form>
    </>
  );
};

export default DinHizmetleri;
