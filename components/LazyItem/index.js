import React from "react";

const LazyItem = ({ children, className = "" }) => {
  return <div className={`lazy__item ${className}`}>{children}</div>;
};

export default LazyItem;
