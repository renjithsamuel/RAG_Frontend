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
import { CollectionSwitcherButton } from "doc-bot/components/CollectionSwitcherButton/CollectionSwitcherButton";
import { DocumentManagerButton } from "doc-bot/components/DocumentManagerButton/DocumentManagerButton";
import { DocumentManagerModal } from "doc-bot/components/DocumentManagerModal/DocumentManagerModal";

export const Home = () => {
  const classes = useHomeStyles();

  const { messages, handleSendMessage, handleQuickAction } = useHome();

  const {
    navBarOpen,
    setCollectionId,
    switchCollectionModalOpen,
    collectionId,
    collectionName,
    setCollectionName,
    setSwitchCollectionModalOpen,
    isDocumentManagerOpen,
    setIsDocumentManagerOpen,
    isIngestOpen,
    setIsIngestOpen,
  } = usePageContext();

  return (
    <Box className={classes.root}>
      {/* collection switcher modal*/}
      {(switchCollectionModalOpen || !collectionId || !collectionName) && (
        <CollectionSelectorDialog
          onSelect={(id, name) => {
            setCollectionId(id);
            setCollectionName(name);
            setSwitchCollectionModalOpen(false);
          }}
        />
      )}

      {/* chat messages */}
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

      {/* document manager */}
      <Box
        sx={{
          position: "fixed",
          top: themeValues.spacing(2),
          right: themeValues.spacing(2),
          display: "flex",
          alignItems: "center",
          gap: themeValues.spacing(2),
          zIndex: 1300,
          // backgroundColor:'red'
        }}
      >
        <DocumentManagerButton onClick={() => setIsDocumentManagerOpen(true)} />
        <CollectionSwitcherButton />
      </Box>

      {isDocumentManagerOpen && (
        <DocumentManagerModal
          open={isDocumentManagerOpen}
          onClose={() => setIsDocumentManagerOpen(false)}
          onAdd={() => {
            setIsDocumentManagerOpen(false);
            setTimeout(() => setIsIngestOpen(true), 200); // delay for animation
          }}
        />
      )}

      <IngestDialog
        open={isIngestOpen}
        onClose={() => {
          setIsIngestOpen(false);
          setTimeout(() => setIsDocumentManagerOpen(true), 200);
        }}
      />
    </Box>
  );
};
