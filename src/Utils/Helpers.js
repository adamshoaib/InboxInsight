import React from "react";
import Slack from "../Assets/Image/slack.svg";
import Gmail from "../Assets/Image/gmail.svg";
import Teams from "../Assets/Image/Teams.svg";
import Jira from "../Assets/Image/jira.svg";
import Discord from "../Assets/Image/discord.svg";
import Asana from "../Assets/Image/asana.svg";
import Chips from "../Components/Atoms/Chips";

export const trimContent = (str, maxLetters = 50) => {
  if (str.length <= maxLetters) {
    return str;
  }
  const trimmedString = str.slice(0, maxLetters) + "...";
  return trimmedString;
};

export const getIconForType = (type) => {
  if (type === "Email") {
    return <img src={Gmail} className="type-icon" />;
  } else if (type === "Slack") {
    return <img src={Slack} className="type-icon" />;
  } else if (type === "Microsoft Teams") {
    return <img src={Teams} className="type-icon" />;
  } else if (type === "Jira") {
    return <img src={Jira} className="type-icon" />;
  } else if (type === "Discord") {
    return <img src={Discord} className="type-icon" />;
  } else if (type === "Asana") {
    return <img src={Asana} className="type-icon" />;
  }
};

export const getIconForStatus = (type) => {
  if (type === "Completed") {
    return <Chips label="Completed" backgroundColor="#b2fa91" />;
  } else if (type === "In-Progress") {
    return <Chips label="In-Progress" backgroundColor="#e9eb83" />;
  } else if (type === "Closed") {
    return <Chips label="Closed" backgroundColor="#a9fcf8" />;
  }
};

export const isValidJSON = (data) => {
  try {
    JSON.parse(data);
    return true;
  } catch (e) {
    if (e instanceof SyntaxError) {
      return false;
    }
  }
  return false;
};
