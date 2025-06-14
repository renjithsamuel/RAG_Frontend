import { usePageContext } from "doc-bot/context/PageContext";
import { useState } from "react";

interface Chat {
  id: number;
  title: string;
}

interface NavBarHook {
  open: boolean;
  toggleDrawer: () => void;
  activeID: number | null;
  activeTitle: string;
  chats: Chat[];
  handleListItemClick: (id: number) => void;
  handleNewChat: () => void;
}

let chatCounter = 4;

export const useNavBar = (): NavBarHook => {
  const { navBarOpen, setNavBarOpen, messages, setMessages } = usePageContext();

  const [chats, setChats] = useState<Chat[]>([
    { id: 1, title: "New Chat 1" },
    { id: 2, title: "Document Analysis" },
    { id: 3, title: "Project Discussion" },
  ]);

  const [activeID, setActiveID] = useState<number>(1);
  const activeTitle = chats.find((c) => c.id === activeID)?.title || "New Chat";

  const toggleDrawer = () => {
    setNavBarOpen((prev) => !prev);
  };

  const handleListItemClick = (id: number) => {
    setActiveID(id);
  };

  const handleNewChat = () => {
    const newId = chatCounter++;
    const newTitle = `New Chat ${newId - 2}`;

    // Save current chat if needed (optional)
    // Example: do something with messages

    setChats((prev) => [{ id: newId, title: newTitle }, ...prev]);

    setActiveID(newId);
    setMessages([]); // clear message history
  };

  return {
    open: navBarOpen,
    toggleDrawer,
    activeID,
    activeTitle,
    chats,
    handleListItemClick,
    handleNewChat,
  };
};
