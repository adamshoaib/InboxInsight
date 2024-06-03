import React, { useState } from "react";
import dayjs from "dayjs";
import {
  getIconForStatus,
  getIconForType,
  trimContent,
} from "../../Utils/Helpers";

const OrderCard = ({ data, onCardClick }) => {
  return (
    <div onClick={onCardClick} className="order-card-root">
      <div className="order-card-info">
        <div>
          <span className="order-card-from">{data.name}</span>
        </div>
        <div>
          <span className="order-card-date">
            {dayjs(data.date).format("DD/MM/YYYY")}
          </span>
          {data.time && <span className="order-card-time">{data.time}</span>}
        </div>
      </div>
      <div className="order-card-subject-channel">
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
      <div className="order-card-description">
        <span>
          {trimContent(data.outline ? data.outline : data.description, 100)}
        </span>
      </div>
      <div className="order-card-type-actions">
        <div>
          <span>{getIconForType(data.type)}</span>
        </div>
        {data.startTime && data.endTime && (
          <div>
            <span>{`${data.startTime} To ${data.endTime}`}</span>
          </div>
        )}
        {data.status && (
          <div>
            <span>{getIconForStatus(data.status)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function OrderRequests({ allData, detailClicked }) {
  const [data, setData] = useState(allData);

  return (
    <div className="order-requests-root">
      {data?.map((details, index) => {
        return (
          <OrderCard
            key={index}
            data={details}
            onCardClick={() => {
              detailClicked(details);
            }}
          />
        );
      })}
    </div>
  );
}
