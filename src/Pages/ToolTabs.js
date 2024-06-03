import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tool from "../Components/Organism/Tool";
import StorageIcon from "@mui/icons-material/Storage";

export default function ToolTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="tool-tab-root">
        <Tabs
          value={value}
          onChange={handleChange}
          className="tool-tab"
        >
          <Tab icon={<StorageIcon />} label="All Messages" />
        </Tabs>
      </div>
      {value === 0 && <Tool />}
    </>
  );
}
