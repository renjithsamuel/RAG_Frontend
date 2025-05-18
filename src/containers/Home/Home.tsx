"use client";
import { Box, Stack } from "@mui/material";
import { useHomeStyles } from "./Home.styles";
import { useHome } from "./Home.hooks";
import { IngestButton } from "doc-bot/components/IngestButton/IngestButton";
import { IngestDialog } from "doc-bot/components/IngestDialog/IngestDialog";
import { ChatInput } from "doc-bot/components/ChatInput/ChatInput";
import { ChatMessages } from "doc-bot/components/ChatMessages/ChatMessages";
import { usePageContext } from "doc-bot/context/PageContext";
import { themeValues } from "doc-bot/constants/ThemeConstants";
import { QuickActions } from "doc-bot/components/QuickActions/QuickActions";

export const Home = () => {
  const classes = useHomeStyles();
  const {
    messages,
    handleSendMessage,
    isIngestOpen,
    handleIngestOpen,
    handleIngestClose,
    handleQuickAction,
  } = useHome();

  const { navBarOpen } = usePageContext();


  return (
    <Box className={classes.root}>
      <IngestButton onOpen={handleIngestOpen} />
      <IngestDialog open={isIngestOpen} onClose={handleIngestClose} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          marginLeft: navBarOpen ? themeValues.spacing(32) : 0,
        }}
      >
        {messages.length === 0 ? (
          <QuickActions onActionClick={handleQuickAction} />
        ) : (
          <ChatMessages messages={messages} />
        )}
        <ChatInput onSend={handleSendMessage} />
      </Box>
    </Box>
  );
};
