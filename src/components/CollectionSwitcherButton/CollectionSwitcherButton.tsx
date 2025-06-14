"use client";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { usePageContext } from "doc-bot/context/PageContext";
import { useCollectionSwitcherStyles } from "./CollectionSwitcherButton.styles";

export const CollectionSwitcherButton = () => {
  const classes = useCollectionSwitcherStyles();
  const { collectionName, setSwitchCollectionModalOpen } = usePageContext();

  return (
    <Box className={classes.container}>
      <Typography variant="subtitle2" className={classes.text}>
        {collectionName}
      </Typography>
      <Tooltip title="Switch Collection">
        <IconButton
          className={classes.iconButton}
          onClick={() => setSwitchCollectionModalOpen(true)}
          size="small"
        >
          <HiOutlineSwitchHorizontal size={18} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
