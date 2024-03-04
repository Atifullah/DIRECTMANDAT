import clsx from "clsx";
import React from "react";
import { Paragraph } from "src/components";

export const RadioButton = ({
  disable,
  state,
  setState,
  title,
  op,
  onClick,
}) => {
  return (
    <div
      onClick={() => {
        if (disable) {
          return;
        } else {
          if (!onClick) {
            setState(op);
          } else {
            onClick();
          }
        }
      }}
      className="flex gap-2 cursor-pointer"
    >
      <div
        className={clsx(
          "h-7 w-7 flex justify-center items-center rounded-full border ",
          state === op ? "border-primary" : "border-slate-400"
        )}
      >
        <div
          className={clsx(
            "h-5 w-5 rounded-full border border-white ",
            state === op ? "bg-primary" : "bg-transparent"
          )}
        ></div>
      </div>
      <Paragraph>{title}</Paragraph>
    </div>
  );
};
