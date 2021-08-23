import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { DollarSign, Plus } from "react-feather";
import RequestUnit from "../../components/RequestUnit";
import useApi from "../../util/useApi";
import { Modal, Backdrop, Fade } from "@material-ui/core";

export default function Main() {
  const [reqs, setReqs] = useState([]);
  const [open, setOpen] = useState(false);
  const API_URL = useApi(location.href);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setReqs(data.data);
        setOpen(true);
      });
  }, []);
  return (
    <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
      <article className="relative w-full p-3">
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
                  Please check the actual identity of the person requesting
                  before sharing money with them. This is just a platform to
                  connect people, and data could be real or false. Again, please
                  verify the identity before giving money.{" "}
                </p>
              </div>
            </Fade>
          </Modal>
          <div
            className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
            style={{ top: "0px" }}
          >
            <div className="flex justify-between items-center mb-5">
              <article className="flex space-x-2 items-center justify-center">
                <DollarSign className="text-pink-500" />
                <h3>All Requests</h3>
              </article>
              <Button
                clickHandler={() => {
                  location.replace("/create");
                }}
              >
                <div className="flex items-center justify-center space-x-1">
                  <Plus className="text-white" />
                  <h4 className="text-white">Request</h4>
                </div>
              </Button>
            </div>
          </div>
          <div>
            <div className="flex flex-col flex-1 mb-8">
              <div className="flex flex-col space-y-4">
                {reqs.map((req: any, index) => {
                  return (
                    <div key={index}>
                      <RequestUnit
                        student={{
                          name: req.name,
                          class: req.grade,
                          percentage: req.perc,
                          email: req.mail,
                          phoneNum: req.phone,
                        }}
                        school={{
                          name: req.school,
                          email: req.smail,
                          phoneNum: req.sphone,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
