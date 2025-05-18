import { usePageContext } from "doc-bot/context/PageContext";
import { useState } from "react";

interface NavBarHook {
  open: boolean;
  toggleDrawer: () => void;
  activeID: number | null;
  handleListItemClick: (id: number) => void;
}

export const useNavBar = (): NavBarHook => {
  const [activeID, setActiveID] = useState<number | null>(1)
  const {navBarOpen, setNavBarOpen} = usePageContext();

  const toggleDrawer = () => {
    setNavBarOpen((prev) => !prev);
  };

  const handleListItemClick = (id: number) => {
    setActiveID(id);
  }

  return { open: navBarOpen, toggleDrawer, activeID, handleListItemClick };
};
