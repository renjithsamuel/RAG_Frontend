"use client";
import { Box, ButtonBase, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { SourceCard } from "./SourceCard";
import { SourceDialog } from "./SourceDialog";
import { useSourceList } from "./SourceList.hooks";
import { useSourceListStyles } from "./SourceList.styles";
import { ISource } from "doc-bot/entity/Content/Chat";
import { FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export const SourceList = ({ sources }: { sources: ISource[] }) => {
  const classes = useSourceListStyles();
  const {
    showAll,
    visibleSources,
    handleMoreClick,
    dialogOpen,
    openDialogWithIndex,
    closeDialog,
    selectedIndex,
  } = useSourceList(sources);

  return (
    <Box className={classes.wrapper}>
      <Typography
        variant="subtitle2"
        className={classes.title}
        sx={{ marginBottom: 1 }}
      >
        Sources
      </Typography>

      <Box className={classes.cards}>
        <AnimatePresence>
          {visibleSources.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 * idx, y: -10 * idx, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20 * idx, y: 10 * idx, scale: 0.8 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <SourceCard
                data={src}
                index={idx}
                onClick={() => openDialogWithIndex(idx)}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* collapse or show all */}
        {sources.length > 2 && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ layout: { duration: 0.3, delay: showAll ? 0 : 0.4 } }}
            whileHover={{ scale: 1.05 }}
          >
            <ButtonBase
              onClick={handleMoreClick}
              focusRipple
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                // backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: "1px solid rgba(12, 36, 101, 0.2)",
                cursor: "pointer",
              }}
            >
              {showAll ? <FaChevronUp /> : <MoreHorizIcon />}
            </ButtonBase>
          </motion.div>
        )}
      </Box>

      <SourceDialog
        openDialogWithIndex={openDialogWithIndex}
        open={dialogOpen}
        onClose={closeDialog}
        sources={sources}
        currentIndex={selectedIndex}
      />
    </Box>
  );
};
