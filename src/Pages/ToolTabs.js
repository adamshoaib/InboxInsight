import * as React from "react";
import Tool from "../Components/Organism/Tool";

export default function ToolTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="tool-tab-root">
        <p className="tool-tab-header-text">All Messages</p>
      </div>
      <Tool />
    </>
  );
}
