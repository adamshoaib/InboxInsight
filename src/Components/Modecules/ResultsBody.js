import React from "react";

export default function ResultsBody({ data }) {
  console.log("Data:", data);
  return <div>{data && <p className="analysis-data">{data}</p>}</div>;
}
