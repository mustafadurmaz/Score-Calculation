import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

interface Params {
  fieldLabel: string;
  name: string;
  placeholder: string;
  control: any;
  errors: any;
  className?: string;
  isDisabled?: boolean;
  scoreResults?: any;
}

const CustomScoreType = ({
  fieldLabel,
  name,
  placeholder,
  control,
  errors,
  className,
  isDisabled,
  scoreResults
}: Params) => {
  const [workSpaceGroupData, setWorkSpaceGroupData] = useState<any[]>([

  ]);


  useEffect(()=>{
    let updatedScoreResults = scoreResults.map((result:any) => ({
      ...result,
      puanTuru: result.puanTuru + ' ' + result.yerlestirmePuani,
      yerlestirmePuani: Number(result.yerlestirmePuani),
    }));
      setWorkSpaceGroupData(updatedScoreResults);

  },[])

  return (
    <>
      <h5 className={className} style={{ marginBottom: "0.5em" }}>
        {(fieldLabel)}
      </h5>
      <Controller
        // defaultValue={data || ""}
        name={name}
        control={control}
        render={({ field }) => (
          <Dropdown
            value={field.value}
            options={workSpaceGroupData}
            optionLabel="puanTuru"
            onChange={(e) => {
              field.onChange(e.value);
            }}
            filter
            // filterTemplate={filterTemplate}
            placeholder={(placeholder)}
            style={{ width: "100%" }}
            disabled={isDisabled ? isDisabled : false}
          />
        )}
      />
      <p style={{ color: "red" }}>{errors[name]?.message}</p>
    </>
  );
};

export default CustomScoreType;