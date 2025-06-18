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
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { DocumentCard } from "../DocumentCard/DocumentCard";
import CloseIcon from "@mui/icons-material/Close";
import { ConfirmDeleteDialog } from "../ConfirmDeleteDialog/ConfirmDeleteDialog";
import { usePageContext } from "doc-bot/context/PageContext";
import { useDocuments } from "doc-bot/pyconnection/Document/GetDocuments";
import { useDeleteDocument } from "doc-bot/pyconnection/Document/DeleteDocument";

export const DocumentManagerModal = ({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
}) => {
  const { setSnackBarError, collectionId } = usePageContext();
  const { data: documents = [], isLoading } = useDocuments(collectionId);
  // const isLoading = false
  // const documents = [
  //   { filename: "Document1.pdf", id: "1" },
  //   { filename: "Document1.pdf", id: "1" },
  //   { filename: "Document1.pdf", id: "1" },
  //   { filename: "Document2.docx", id: "2" },
  //   { filename: "Document3.txt", id: "3" }
  // ]

  const deleteDocument = useDeleteDocument(collectionId);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const confirmDelete = async () => {
    if (!fileToDelete) return;
    try {
      await deleteDocument.mutateAsync(fileToDelete.id, {
        onError: () => {
          setSnackBarError({
            ErrorMessage: "Failed to delete document",
            ErrorSeverity: "error",
          });
        },
        onSuccess: () => {
          setSnackBarError({
            ErrorMessage: "Document deleted successfully",
            ErrorSeverity: "success",
          });
        },
      });
      setFileToDelete(null);
      setConfirmOpen(false);
    } catch (err) {
      console.error("Failed to delete document:", err);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          // bgcolor: "rgba(243, 247, 249, 0.95)",
          bgcolor: "#f5f5f5",
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

      <DialogContent sx={{minHeight: 200, display: "flex", justifyContent: isLoading? "center" : "start", alignItems: "center"}}>
        {(deleteDocument.isLoading || isLoading)  ? (
          <CircularProgress />
        ) : (
          <Box>
            <Box sx={{ mt: 3, minHeight: 400 }}>
              <Box
                display="grid"
                gridTemplateColumns={{
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={1}
                justifyContent="center"
                alignItems={"center"}
              >
                {documents?.length > 0 && documents.map((doc, i) => (
                  <DocumentCard
                    key={doc.id}
                    name={doc.filename}
                    onDeleteRequest={() => {
                      setConfirmOpen(true);
                      setFileToDelete({ id: doc.id, name: doc.filename });
                    }}
                  />
                ))}
                {/* Add Button */}
                <motion.div whileHover={{ scale: 1.05 }}>
                  <ButtonBase
                    onClick={onAdd}
                    focusRipple
                    sx={{
                      width: 250,
                      height: 60,
                      background: "#fff",
                      borderRadius: 2,
                      m: 1.2,
                      px: 2,
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
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
