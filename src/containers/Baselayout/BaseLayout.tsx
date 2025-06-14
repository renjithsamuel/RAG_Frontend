"use client";
import { Alert, Box } from "@mui/material";
import { useBaseLayout } from "./BaseLayout.hooks";
import { FC, ReactNode } from "react";
import { useBaseLayoutStyles } from "./BaseLayout.styles";
import { ConnectingToServerDialog } from "doc-bot/components/ConnectingToServerDialog/ConnectingToServerDialog";
import { UnAuthorizedPage } from "../UnAuthorizedPage/UnAuthorizedPage";
import { LoginDialog } from "doc-bot/components/LoginDialog/LoginDialog";
import { AlertSnackbar } from "doc-bot/components/AlertSnackbar/AlertSnackbar";
import { NavBar } from "doc-bot/components/NavBar/NavBar";

interface BaseLayoutProps {
  authenticatedOnly?: boolean;
  children?: ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  authenticatedOnly = true,
  children,
}) => {
  const {
    authenticated,
    isSuccess,
    isLoading,
    alertSnackbarMessage,
    handleCloseAlertSnackbar,
    isAlertSnackbarOpen,
    inUnauthorizedPage,
  } = useBaseLayout({
    authenticatedOnly,
  });

  const classes = useBaseLayoutStyles();

  if (inUnauthorizedPage) {
    return <UnAuthorizedPage />;
  }

  if (authenticatedOnly) {
    return (
      <Box className={classes.app}>
        {/* <LoginDialog /> */}
        {isLoading ? (
          <ConnectingToServerDialog />
        ) : (
          (!authenticated || !isSuccess) && <LoginDialog />
        )}
        <NavBar />
        <AlertSnackbar open={isAlertSnackbarOpen}>
          <Alert
            onClose={handleCloseAlertSnackbar}
            severity={alertSnackbarMessage?.severity}
          >
            {alertSnackbarMessage?.message}
          </Alert>
        </AlertSnackbar>
        {children}
      </Box>
    );
  }

  return (
    <Box className={classes.app}>
      <NavBar />
      <AlertSnackbar open={isAlertSnackbarOpen}>
        <Alert
          onClose={handleCloseAlertSnackbar}
          severity={alertSnackbarMessage?.severity}
        >
          {alertSnackbarMessage?.message}
        </Alert>
      </AlertSnackbar>
      {isLoading ? <ConnectingToServerDialog /> : children}
    </Box>
  );
};
