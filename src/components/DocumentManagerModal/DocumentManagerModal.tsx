"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { DocumentCard } from "../DocumentCard/DocumentCard";
import CloseIcon from "@mui/icons-material/Close";
import { ConfirmDeleteDialog } from "../ConfirmDeleteDialog/ConfirmDeleteDialog";

export const DocumentManagerModal = ({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
}) => {
  const [documents, setDocuments] = useState([
    { id: "1", name: "manual.pdf" },
    { id: "2", name: "data.txt" },
    { id: "3", name: "chart.png" },
  ]);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const confirmDelete = () => {
    if (!fileToDelete) return;
    setDocuments((prev) => prev.filter((d) => d.id !== fileToDelete.id));
    setFileToDelete(null);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          // bgcolor: "rgba(243, 247, 249, 0.95)",
          bgcolor: "#fff",
          borderRadius: 2,
          position: "relative",
          overflow: "visible", // to allow floating delete buttons etc.
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.3)",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "start", pb: 0 }}>
        <Typography variant="h4">Documents</Typography>

        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            "&:hover": {
              backgroundColor: "#f1f1f1",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="start"
          alignItems={"center"}
          sx={{ gap: 2, mt: 2 }}
        >
          {documents.map((doc, i) => (
            <DocumentCard
              key={doc.id}
              name={doc.name}
              onDeleteRequest={() => {
                setConfirmOpen(true);
                setFileToDelete({ id: doc.id, name: doc.name });
              }}
            />
          ))}

          {/* Add Button */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{
              width: 150,
              height: 60,
              background: "#fff",
              borderRadius: 3,
              // boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "2px dashed #b0b9c6",
            }}
            onClick={onAdd}
          >
            <Tooltip title="Add Document" arrow>
              <FaPlus size={20} color="#727D90" />
            </Tooltip>
          </Box>
        </Box>

        {/* confirm delete dialog */}
        <ConfirmDeleteDialog
          open={confirmOpen}
          onClose={() => {
            setConfirmOpen(false);
            setFileToDelete(null);
          }}
          onConfirm={confirmDelete}
          fileName={fileToDelete?.name || ""}
        />
      </DialogContent>
    </Dialog>
  );
};
