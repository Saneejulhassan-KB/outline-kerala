"use client";
import React from "react";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import localizedFormat from "dayjs/plugin/localizedFormat";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(localizedFormat);
dayjs.extend(weekday);

const CommentTimestamp = ({ date }) => {
  if (!date) return null;

  const now = dayjs();
  const d = dayjs(date);

  let formatted;

  if (d.isToday()) {
    formatted = d.format("h:mm A");
  } else if (d.isYesterday()) {
    formatted = "Yesterday";
  } else if (now.diff(d, "day") < 7) {
    formatted = d.format("dddd"); // Monday, Tuesday...
  } else if (now.year() === d.year()) {
    formatted = d.format("D MMM"); // 5 Jul
  } else {
    formatted = d.format("D MMM YYYY"); // 5 Jul 2023
  }

  return <span title={d.format("D MMM YYYY, h:mm A")}>{formatted}</span>;
};

export default CommentTimestamp;
