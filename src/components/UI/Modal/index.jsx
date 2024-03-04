import React from "react";

//packages
import clsx from "clsx";

//mui
import { DialogContent, DialogTitle, Dialog } from "@mui/material";

//mui icons
import IconButton from "@mui/material/IconButton";
import { HeadSubtitle } from "../Typography";

// style={{
//   position: "relative",
//   top: "auto",
//   left: "auto",
// }}

export const Modal = ({ className, open, children, onClose, title, size }) => {
  // const { position, left, top } = style;
  return (
    <Dialog
      onClose={onClose}
      fullWidth
      open={open}
      maxWidth={size ? size : "xs"}
      PaperProps={{
        sx: {
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          p: 0,
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "4px",
          },
          borderRadius: "12px",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle>
        <HeadSubtitle className={" !text-lg w-[90%]"}>{title}</HeadSubtitle>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          x
        </IconButton>
      </DialogTitle>
      <DialogContent className={clsx("w-auto", className)}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
