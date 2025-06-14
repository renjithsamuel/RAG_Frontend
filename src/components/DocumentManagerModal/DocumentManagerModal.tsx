"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Tooltip,
  ButtonBase,
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
      <DialogTitle sx={{ textAlign: "start", pb: 0, userSelect: "none" }}>
        <Typography variant="h3">Manage Context</Typography>

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
        <Box sx={{ mt: 3, minHeight: 300 }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(3, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(5, 1fr)",
            }}
            gap={2}
            justifyContent="center"
            alignItems={"center"}
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
            <motion.div whileHover={{ scale: 1.05 }}>
              <ButtonBase
                onClick={onAdd}
                focusRipple
                sx={{
                  width: 150,
                  height: 60,
                  background: "#fff",
                  borderRadius: 2,
                  border: "2px dashed #b0b9c6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Tooltip title="Add Document" arrow>
                  <FaPlus size={18} color="#727D90" />
                </Tooltip>
              </ButtonBase>
            </motion.div>
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
