import React from "react";
import dayjs from "dayjs";
import { getIconForStatus, getIconForType } from "../../Utils/Helpers";

export default function InfoDetailsBody({ data }) {
  return (
    <div className="modal-body-root">
      <div className="modal-body-info">
        <span>{getIconForType(data.type)}</span>
        <span className="order-card-from">{data.name}</span>
        <span className="order-card-date">
          {dayjs(data.date).format("DD/MM/YYYY")}{" "}
          {data.time && <span className="order-card-time">{data.time}</span>}
        </span>
      </div>

      <div className="modal-body-description">
        {data.channelName && (
          <span className="order-card-channelName">{data.channelName}</span>
        )}
        {data.subject && (
          <span className="order-card-channelName">{data.subject}</span>
        )}
        {data.ticketHeading && (
          <span className="order-card-channelName">{data.ticketHeading}</span>
        )}
      </div>
      <div className="modal-body-description">{data.description}</div>
      <div className="modal-body-description">
        <span>{getIconForStatus(data.status)}</span>
        {data.startTime && data.endTime && (
          <div>
            <span>{`${data.startTime} To ${data.endTime}`}</span>
          </div>
        )}
      </div>
    </div>
  );
}
