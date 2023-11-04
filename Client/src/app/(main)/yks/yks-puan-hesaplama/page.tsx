"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

interface ITukceInputs {
  turkceDogru?: number;
  turkceYanlis?: number;
  turkceNet?:number;
}

const FormLayoutDemo = () => {
  const schema = yup.object({
  });

  

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

  const calculateTurkceNet = (dogru: number | undefined, yanlis: number | undefined): number | undefined => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <div className="col-12 md:col-4">
            <div className="card p-fluid">
              <h5>TYT</h5>

              <div className="field grid">
                <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-3">
                  Türkçe
                </label>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceDogru")}
                      style={{ width: "100%" }}
                      type="number"
                    />
                    <p style={{ color: "red" }}>
                      {errors?.turkceDogru?.message}
                    </p>
                    <label htmlFor="inputtext">Doğru</label>
                  </span>
                </div>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceYanlis")}
                      style={{ width: "100%" }}
                      type="number"
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
                      value={turkceNet !== undefined ? turkceNet.toString() : ''}
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
                    <InputText
                      autoComplete="off"
                      {...register("turkceDogru")}
                      style={{ width: "100%" }}
                      type="number"
                    />
                    <p style={{ color: "red" }}>
                      {errors?.turkceDogru?.message}
                    </p>
                    <label htmlFor="inputtext">Doğru</label>
                  </span>
                </div>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceYanlis")}
                      style={{ width: "100%" }}
                      type="number"
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
                      value={turkceNet !== undefined ? turkceNet.toString() : ''}
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
                Temel Matematik
                </label>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceDogru")}
                      style={{ width: "100%" }}
                      type="number"
                    />
                    <p style={{ color: "red" }}>
                      {errors?.turkceDogru?.message}
                    </p>
                    <label htmlFor="inputtext">Doğru</label>
                  </span>
                </div>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceYanlis")}
                      style={{ width: "100%" }}
                      type="number"
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
                      value={turkceNet !== undefined ? turkceNet.toString() : ''}
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
                Fen Bilimleri
                </label>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceDogru")}
                      style={{ width: "100%" }}
                      type="number"
                    />
                    <p style={{ color: "red" }}>
                      {errors?.turkceDogru?.message}
                    </p>
                    <label htmlFor="inputtext">Doğru</label>
                  </span>
                </div>
                <div className="col-12 md:col-3">
                  <span className="p-float-label">
                    <InputText
                      autoComplete="off"
                      {...register("turkceYanlis")}
                      style={{ width: "100%" }}
                      type="number"
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
                      value={turkceNet !== undefined ? turkceNet.toString() : ''}
                      disabled 
                      type="number"
                    />
                    <p style={{ color: "red" }}>{errors?.turkceNet?.message}</p>
                    <label htmlFor="inputtext">Net</label>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormLayoutDemo;
