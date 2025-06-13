"use client";
import { Box } from "@mui/material";
import { useHomeStyles } from "./Home.styles";
import { useHome } from "./Home.hooks";
import { IngestButton } from "doc-bot/components/IngestButton/IngestButton";
import { IngestDialog } from "doc-bot/components/IngestDialog/IngestDialog";
import { ChatInput } from "doc-bot/components/ChatInput/ChatInput";
import { ChatMessages } from "doc-bot/components/ChatMessages/ChatMessages";
import { usePageContext } from "doc-bot/context/PageContext";
import { themeValues } from "doc-bot/constants/ThemeConstants";
import { QuickActions } from "doc-bot/components/QuickActions/QuickActions";
import { useState } from "react";
import { CollectionSelectorDialog } from "doc-bot/components/CollectionSelectorDialog/CollectionSelectorDialog";

export const Home = () => {
  const classes = useHomeStyles();
  const [collectionId, setCollectionId] = useState<string | null>(null);
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
      {!collectionId && <CollectionSelectorDialog onSelect={(id) => setCollectionId(id)} />}
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
