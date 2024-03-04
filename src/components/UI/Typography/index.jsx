import clsx from "clsx";
import React from "react";

export const HeadTitle = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "text-[26px] lg:text-[34px] font-bold text-black",
        className
      )}
    >
      {children}
    </div>
  );
};
export const HeadSubtitle = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "text-[20px] lg:text-[26px] font-bold  text-black",
        className
      )}
    >
      {children}
    </div>
  );
};
export const Title = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "text-[17px] lg:text-[22px] font-bold text-black",
        className
      )}
    >
      {children}
    </div>
  );
};
export const Subtitle = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "text-[14px] lg:text-[20px] font-bold text-black",
        className
      )}
    >
      {children}
    </div>
  );
};
export const Paragraph = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "text-[14px] lg:text-[18px] font-normal text-[#404040]",
        className
      )}
    >
      {children}
    </div>
  );
};
export const Tiny = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "text-[10px] lg:text-[12px] font-bold text-[#404040]",
        className
      )}
    >
      {children}
    </div>
  );
};
