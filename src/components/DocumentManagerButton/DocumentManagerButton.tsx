"use client";
import { Box, IconButton, Tooltip } from "@mui/material";
import { GrDocumentStore } from "react-icons/gr";
import { useState } from "react";
import { useDocumentManagerButtonStyles } from "./DocumentManagerButton.styles";
import { DocumentManagerModal } from "../DocumentManagerModal/DocumentManagerModal";

export const DocumentManagerButton = ({ onClick }: { onClick: () => void }) => {
  const classes = useDocumentManagerButtonStyles();
  return (
    <Tooltip title="Manage Documents">
      <IconButton className={classes.iconButton} onClick={onClick}>
        <GrDocumentStore size={18} />
      </IconButton>
    </Tooltip>
  );
};
