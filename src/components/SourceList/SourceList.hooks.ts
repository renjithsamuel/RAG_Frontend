import { ISource } from "doc-bot/entity/Content/Chat";
import { useState } from "react";

export const useSourceList = (sources: ISource[]) => {
  const [showAll, setShowAll] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleSources, setVisibleSources] = useState<ISource[]>(
    sources.slice(0, 2),
  );

  const openDialogWithIndex = (index: number) => {
    setSelectedIndex(index);
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);

  const handleMoreClick = () => {
    if (showAll) {
      // First, animate card exit
      setVisibleSources(sources.slice(0, 2));

      // Wait for exit animation to complete
      setTimeout(() => {
        setShowAll(false);
      }, 400); // match motion exit animation
    } else {
      setShowAll(true);
      setVisibleSources(sources); // show all immediately
    }
  };

  return {
    showAll,
    visibleSources,
    handleMoreClick,
    openDialogWithIndex,
    dialogOpen,
    closeDialog,
    selectedIndex,
  };
};
