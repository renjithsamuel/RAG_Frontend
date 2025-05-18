"use client"
import { AlertType } from "doc-bot/types/AlertType";
import { JSX } from "@emotion/react/jsx-runtime";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type TPageContext = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  snackBarError: AlertType | undefined;
  setSnackBarError: Dispatch<SetStateAction<AlertType | undefined>>;
  DialogBox: JSX.Element | undefined;
  setDialogBox: Dispatch<SetStateAction<JSX.Element | undefined>>;
  isDarkMode: boolean;
  toggleTheme: () => void;
  openSavedDialog: boolean;
  setOpenSavedDialog: Dispatch<SetStateAction<boolean>>;
  navBarOpen: boolean;
  setNavBarOpen: Dispatch<SetStateAction<boolean>>;
  messages: any[];
  setMessages: Dispatch<SetStateAction<any[]>>;
};

export const PageContext = createContext<TPageContext>(
  {} as unknown as TPageContext,
);

interface UserContextProviderProps {
  children: ReactNode;
}

export const PageContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [snackBarError, setSnackBarError] = useState<AlertType | undefined>();
  const [DialogBox, setDialogBox] = useState<JSX.Element | undefined>(
    undefined,
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSavedDialog, setOpenSavedDialog] = useState(false);
  const [navBarOpen, setNavBarOpen] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <PageContext.Provider
      value={{
        searchText,
        setSearchText,
        snackBarError,
        setSnackBarError,
        DialogBox,
        setDialogBox,
        isDarkMode, 
        toggleTheme,
        openSavedDialog,
        setOpenSavedDialog,
        navBarOpen,
        setNavBarOpen,
        messages,
        setMessages,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = (): TPageContext => useContext(PageContext);
