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
}

const CustomLGSName = ({
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

    await LGSService.GetAllLiseAdi().then((res) => {

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
            optionLabel="liseAdi"
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

export default CustomLGSName;