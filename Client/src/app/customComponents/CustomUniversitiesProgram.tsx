import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import YKSService from "../../services/YKS/YKS";



// import useToast from "../../hooks/useToast";

import CityService from "../../services/cities/cities";

interface Params {
  fieldLabel: string;
  name: string;
  placeholder: string;
  control: any;
  errors: any;
  className?: string;
  isDisabled?: boolean;
}

const CustomUniversitiesProgram = ({
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

    await YKSService.getAllUniversitiesProgram().then((res) => {

      setWorkSpaceGroupData(res.data);

      // let hasContact = temp.some((item: any) => item.id == data);

      // // If the selected person is not on the displayed page, add the selected person to the list
      // if (hasContact === false && data !== undefined && data !== "") {


    });
  };

  useEffect(() => {
    getWorkSpaceGroup();
  }, []);

  // const handleKeyDownContact = async (e: any) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault()
  //     let _searchKey = await e.target.value;
  //     ContactService.findSearchByColumn({
  //       page: 1,
  //       limit: 100,
  //       orderBy: "ASC",
  //       orderByColumn: "email",
  //       searchColumn: "email",
  //       searchString: _searchKey,
  //       searchType: "CONTAINS"
  //     })
  //       .then((response) => {
  //         setContactData(response.data.children.map((child: any) => ({
  //           email: child.email,
  //           key: child.key,
  //           id: child.id
  //         })
  //         ));

  //         _searchKey = "";
  //       })
  //       .catch((err) => {
  //         toast?.current?.show({
  //           severity: "error",
  //           summary: "Error",
  //           detail: err.response ? err.response.data.message : err.message,
  //           life: 2000,
  //         });
  //       });
  //   }
  // }

  // const handleChangeContact = (e: any) => {
  //   if (e.target.value === "") {
  //     getContact();
  //   }
  // }

  // const filterTemplate = (event: any, options: any) => {

  //   return (
  //     <span className="p-input-icon-left" style={{ width: "100%" }}>
  //       <i className="pi pi-search" />
  //       <InputText style={{ width: "100%" }} onKeyDown={handleKeyDownContact} onChange={handleChangeContact} placeholder={t("Search")} />
  //     </span>
  //   )
  // }

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
            optionLabel="programAdi"
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

export default CustomUniversitiesProgram;