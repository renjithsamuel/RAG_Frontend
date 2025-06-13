import { ISource } from "doc-bot/entity/Content/Chat";
import { useState } from "react";

export const useSourceList = (sources: ISource[]) => {
  const [showAll, setShowAll] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const visibleSources = showAll ? sources : sources.slice(0, 2);
  const handleMoreClick = () => setShowAll(true);
  const openDialogWithIndex = (index: number) => {
    setSelectedIndex(index);
    setDialogOpen(true);
  };
  const closeDialog = () => setDialogOpen(false);

  return {
    visibleSources,
    handleMoreClick,
    openDialogWithIndex,
    dialogOpen,
    closeDialog,
    selectedIndex,
  };
};
