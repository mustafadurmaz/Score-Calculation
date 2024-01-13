import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import YKSService from "../../services/YKS/YKS";


interface Params {
  fieldLabel: string;
  name: string;
  placeholder: string;
  control: any;
  errors: any;
  className?: string;
  isDisabled?: boolean;
}

const CustomFacultyName = ({
  fieldLabel,
  name,
  placeholder,
  control,
  errors,
  className,
  isDisabled
}: Params) => {
  const [workSpaceGroupData, setWorkSpaceGroupData] = useState<Node[]>([]);

  const getWorkSpaceGroup = async () => {

    await YKSService.getAllUniversitiesFaculty().then((res) => {

      setWorkSpaceGroupData(res.data);
console.log(res.data);
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
            optionLabel="fakulteler"
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

export default CustomFacultyName;