import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  ButtonBase,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { ISource } from "doc-bot/entity/Content/Chat";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormatTextUtil } from "doc-bot/utils/formatText";

export const SourceDialog = ({
  open,
  onClose,
  sources,
  currentIndex,
  openDialogWithIndex,
}: {
  open: boolean;
  onClose: () => void;
  sources: ISource[];
  currentIndex: number;
  openDialogWithIndex: (index: number) => void;
}) => {
  const source = sources[currentIndex];

  const [direction, setDirection] = useState<"left" | "right">("right");

  const next = () => {
    setDirection("right");
    const nextIndex = (currentIndex + 1) % sources.length;
    openDialogWithIndex(nextIndex);
  };

  const prev = () => {
    setDirection("left");
    const prevIndex = (currentIndex - 1 + sources.length) % sources.length;
    openDialogWithIndex(prevIndex);
  };

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        sx={{
          backdropFilter: "blur(5px)",
          "& .MuiDialog-paper": {
            maxHeight: "70vh", // Fixed max height
          },
        }}
      >
        <DialogTitle
          sx={{
            bgcolor: "#f3f7f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Source Detail</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            bgcolor: "#f3f7f9",
            minHeight: 200,
            position: "relative",
            overflowY: "auto !important",
            overflowX: "hidden",
          }}
        >
          <motion.div
            key={source.content} // ensure unique key
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
            style={{ width: "100%" }}
          >
            <Typography variant="h6">
              {source?.source}
            </Typography>
            <Typography variant="body1" mt={2}>
                {FormatTextUtil.removeExtraDots(source.content)}
            </Typography>
          </motion.div>


          {/* Floating Arrows */}
          {open && (
            <>
              <ButtonBase
                onClick={prev}
                focusRipple
                sx={{
                  position: "fixed",
                  top: "50%",
                  left: "calc(50% - 570px)", // dialog width / 2 + spacing
                  transform: "translateY(-50%)",
                  background: "rgba(243, 247, 249, 0.55)",
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(12, 36, 101, 0.2)",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1301, // above dialog
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  color: "#0c2465",
                }}
              >
                <ArrowBackIcon />
              </ButtonBase>

              <ButtonBase
                focusRipple
                onClick={next}
                sx={{
                  position: "fixed",
                  top: "50%",
                  right: "calc(50% - 570px)",
                  transform: "translateY(-50%)",
                  background: "rgba(243, 247, 249, 0.55)",
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(12, 36, 101, 0.2)",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1301,
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  color: "#0c2465",
                }}
              >
                <ArrowForwardIcon />
              </ButtonBase>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
