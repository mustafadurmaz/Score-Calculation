import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import LGSService from "../../../services/LGS/LGS";

interface Params {
  fieldLabel: string;
  name: string;
  placeholder: string;
  control: any;
  errors: any;
  className?: string;
  isDisabled?: boolean;
  setSelectedCity?: any;
}

const CustomLGSCities = ({
  fieldLabel,
  name,
  placeholder,
  control,
  errors,
  className,
  isDisabled,
  setSelectedCity
}: Params) => {
  const [workSpaceGroupData, setWorkSpaceGroupData] = useState<Node[]>([]);

  const getWorkSpaceGroup = async () => {

    await LGSService.GetAllIl().then((res) => {

      setWorkSpaceGroupData(res.data);

    });
  };

  useEffect(() => {
    getWorkSpaceGroup();
  }, []);


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
            optionLabel="il"
            onChange={(e) => {
              field.onChange(e.value);
              setSelectedCity && setSelectedCity(e.value)
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

export default CustomLGSCities;