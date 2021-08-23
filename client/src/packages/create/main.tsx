import { Eye } from "react-feather";
import useApi from "../../util/useApi";
import Button from "../../components/Button";
import InputUnit from "../../components/InputUnit";
import React, { useEffect, useState } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";

export default function Main() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [perc, setPerc] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [smail, setSmail] = useState("");
  const [sphone, setSphone] = useState("");
  const [open, setOpen] = useState(false);
  const API_URL = useApi(location.href);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
      <article className="relative w-full px-3">
        <div className="flex flex-col flex-1 w-full">
          <Modal
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            className="flex items-center justify-center justify-items-center"
          >
            <Fade in={open}>
              <div className="bg-dark-500 rounded-md p-3 w-9/12 h-max space-y-2 flex flex-col items-center justify-center outline-none">
                <h1>Please note 📚</h1>
                <p className="text-accent-default font-bold font-body">
                  This is a platform to connect people who require help in their
                  studies. Many families have lost their livelihoods due to
                  COVID 19. As a token of respect, please make sure the data you
                  enter is legit and please don't spam. Thank you. 🙏
                </p>
              </div>
            </Fade>
          </Modal>
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
          <Button
            clickHandler={() => {
              fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({
                  name: name,
                  grade: grade,
                  perc: perc,
                  mail: mail,
                  phone: phone,
                  school: school,
                  smail: smail,
                  sphone: sphone,
                }),
                headers: {
                  "content-type": "application/json",
                },
              }).then((res) => setOpen(true));
            }}
          >
            Submit
          </Button>
        </div>
      </article>
    </div>
  );
}
