import * as React from "react";
import Button from "../../components/Button";
import { DollarSign, Plus } from "react-feather";
import RequestUnit from "../../components/RequestUnit";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
      <article className="relative w-full px-3">
        <div className="flex flex-col flex-1 w-full">
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
                <RequestUnit />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
