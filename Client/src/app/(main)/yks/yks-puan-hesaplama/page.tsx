"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

const FormLayoutDemo = () => {
  const [dropdownItem, setDropdownItem] = useState(null);
  const dropdownItems = [
    { name: "Option 1", code: "Option 1" },
    { name: "Option 2", code: "Option 2" },
    { name: "Option 3", code: "Option 3" },
  ];

  return (
    <div className="grid">
      <div className="col-12 md:col-4">
        <div className="card p-fluid">
          <h5>TYT</h5>
          <div className="field grid">
            <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
              Türkçe
            </label>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText type="text" id="inputtext" />
                <label htmlFor="inputtext">Doğru</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText type="text" id="inputtext" />
                <label htmlFor="inputtext">Yanlış</label>
              </span>
            </div>
            <div className="col-12 md:col-3">
              <span className="p-float-label">
                <InputText type="text" id="inputtext" />
                <label htmlFor="inputtext">Net</label>
              </span>
            </div>
          </div>
          <div className="field grid">
            <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
              Email
            </label>
            <div className="col-12 md:col-10">
              <InputText id="email3" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLayoutDemo;
