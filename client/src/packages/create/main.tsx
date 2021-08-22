import React, { useState } from "react";
import { Eye } from "react-feather";
import Button from "../../components/Button";
import InputUnit from "../../components/InputUnit";

export default function Main() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [perc, setPerc] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [smail, setSmail] = useState("");
  const [sphone, setSphone] = useState("");
  return (
    <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
      <article className="relative w-full px-3">
        <div className="flex flex-col flex-1 w-full">
          <div
            className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
            style={{ top: "0px" }}
          >
            <div className="flex justify-left items-center mb-5 space-x-2">
              <Eye className="text-pink-500" />
              <h3>Request</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-3">
          <div className="flex flex-col space-y-4">
            <InputUnit cb={setName} pholder="Name" />
            <InputUnit cb={setGrade} pholder="Class / Degree" />
            <InputUnit cb={setPerc} pholder="Percentage" />
            <InputUnit cb={setMail} pholder="Email" />
            <InputUnit cb={setPhone} pholder="P. number" />
            <InputUnit cb={setSchool} pholder="Institute" />
            <InputUnit cb={setSmail} pholder="Institute Email" />
            <InputUnit cb={setSphone} pholder="Institute P. number" />
          </div>
        </div>
        <div className="p-2 mb-8">
          <Button>Submit</Button>
        </div>
      </article>
    </div>
  );
}
