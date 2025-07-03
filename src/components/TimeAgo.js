"use client";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: (str) => {
      if (["just now", "today", "yesterday"].includes(str)) return str;
      return `${str} ago`;
    },
    s: "just now",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "today",
    dd: (n) => (n === 1 ? "yesterday" : `${n} days`),
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

const TimeAgo = ({ date }) => {
  if (!date) return null;

  return (
    <span title={dayjs(date).format("MMM D, YYYY h:mm A")}>
      {dayjs(date).fromNow()}
    </span>
  );
};

export default TimeAgo;
