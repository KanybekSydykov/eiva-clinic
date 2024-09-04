"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterAnimation = ({
  number,
  height,
  divider = true,
}: {
  number: number;
  height?: string;
  divider?: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure animation only happens once
    threshold: 0.1,    // 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        minHeight: height ? height : "30px",
      }}
    >
      {inView ? (
        <CountUp separator={divider ? " " : ""} start={0} end={number} />
      ) : null}
    </div>
  );
};

export default CounterAnimation;
