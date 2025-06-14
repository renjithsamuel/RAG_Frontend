"use client";
import { IconButton } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

interface IngestButtonParams {
  onOpen: () => void;
}

export const IngestButton = ({ onOpen }: IngestButtonParams) => {
  return (
    <IconButton
      onClick={onOpen}
      sx={{
        position: "fixed",
        right: 24,
        top: 24,
        zIndex: 999,
      }}
    >
      <UploadIcon fontSize="large" />
    </IconButton>
  );
};
