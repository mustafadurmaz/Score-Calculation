"use client";
import React, { useEffect, useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

interface ITYTInputs {
  puanTuru: string;
}

interface Params {
  setTytScores: any;
  toggleReset: boolean;
}

const categories = [
  { name: "Lisans (P1 - P48)", code: "A" },
  { name: "Öğretmenlik (ÖABT) (P10, P120, P121)", code: "M" },
  { name: "Önlisans (P93)", code: "P" },
  { name: "Ortaöğretim (P94)", code: "R" },
  { name: "Din Hizmetleri (DHBT) (P122, P123, P124)", code: "R" },
];

const KPSSExamType = ({ setTytScores, toggleReset }: Params) => {
  const [isEnroll, setIsEnroll] = useState<any>(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);

  const schema = yup.object({});

  useEffect(() => {
    setIsEnroll(false);
  }, [toggleReset]);

  return (
    <>
      <div className="card">
        <h5>Hesaplamak istediğiniz puan türünü seçiniz</h5>
        <div className="grid p-fluid mt-3">
          <div className="col-12 md:col-12">
            {categories.map((category) => {
              return (
                <div key={category.code} className="flex align-items-center">
                  <RadioButton
                    inputId={category.code}
                    name="category"
                    value={category}
                    onChange={(e) => setSelectedCategory(e.value)}
                    checked={selectedCategory.code === category.code}
                  />
                  <label htmlFor={category.code} className="ml-2">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default KPSSExamType;
