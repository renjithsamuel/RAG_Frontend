"use client";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { SourceCard } from "./SourceCard";
import { SourceDialog } from "./SourceDialog";
import { useSourceList } from "./SourceList.hooks";
import { useSourceListStyles } from "./SourceList.styles";
import { ISource } from "doc-bot/entity/Content/Chat";

export const SourceList = ({ sources }: { sources: ISource[] }) => {
  const classes = useSourceListStyles();
  const {
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
        {visibleSources.map((src, idx) => (
          <SourceCard
            key={idx}
            data={src}
            index={idx}
            onClick={() => openDialogWithIndex(idx)}
          />
        ))}

        {sources.length > 2 && (
          <Box className={classes.moreCard} onClick={handleMoreClick}>
            <MoreHorizIcon />
          </Box>
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
