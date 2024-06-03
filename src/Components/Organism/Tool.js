import React, { useState } from "react";
import OrderRequests from "./OrderRequests";
import { dataArray } from "../../Utils/Constants";
import { sensMSGToOpenAI } from "../../Services";
import ModalBox from "../Modecules/Modal";
import Loader from "../Atoms/Loader";
import { isValidJSON } from "../../Utils/Helpers";
import Button from "../Atoms/Button";
import InfoDetailsBody from "../Modecules/InfoDetailsBody";
import ResultsBody from "../Modecules/ResultsBody";

export default function Tool() {
  const [selectedInfo, setSlectedInfo] = useState({});
  const [generateOutput, setGenerateOutput] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    const serializedData = JSON.stringify(dataArray);
    sensMSGToOpenAI({
      prompt: `Provide a short summary of important messages, grouped under suitable headers. Include time considerations if necessary, and combine similar messages. ${serializedData}`,
      model: "gpt-4",
      tokens: 1000,
    })
      .then((res) => {
        const response = res?.choices[0]?.message?.content;
        console.log("Response : ", response);
        const formatJson = response?.replace(/```json\n?|```/g, "");
        console.log("formatJson : ", formatJson);
        const parsedData = formatJson
          ? isValidJSON(formatJson)
            ? JSON.parse(formatJson)
            : {}
          : {};
        console.log("parsedData : ", parsedData);
        setGenerateOutput(formatJson);
        setResultModalOpen(true);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  const processData = () => {
    setIsLoading(true);
    handleSubmit();
  };

  const openDetailsModal = (data) => {
    setModalOpen(true);
    setSlectedInfo(data);
  };

  return (
    <>
      <div className="tool-root">
        <div className="analyse-button">
          <Button
            label={"Summarise My Messages"}
            onClick={() => processData()}
          />
        </div>
        <div class="tool-info-container">
          <OrderRequests
            allData={dataArray}
            detailClicked={(data) => {
              openDetailsModal(data);
            }}
          />
        </div>
      </div>
      {isLoading && <Loader />}
      <ModalBox
        open={modalOpen}
        title={"Message Details"}
        data={selectedInfo}
        handleClose={() => setModalOpen(false)}
        body={InfoDetailsBody}
        processData={(data) => processData(data)}
      />
      <ModalBox
        open={resultModalOpen}
        data={generateOutput}
        body={ResultsBody}
        title={"Your messages summary"}
        handleClose={() => setResultModalOpen(false)}
        processData={(data) => processData(data)}
      />
    </>
  );
}
