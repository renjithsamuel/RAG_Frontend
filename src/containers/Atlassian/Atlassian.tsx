"use client";
import { Box } from "@mui/material";
import { useAtlassianStyles } from "./Atlassian.styles";
import { useAtlassian, AtlassianCredentials } from "./Atlassian.hooks";
import { AtlassianHeader } from "doc-bot/components/AtlassianHeader/AtlassianHeader";
import { AtlassianSearchBar } from "doc-bot/components/AtlassianSearchBar/AtlassianSearchBar";
import { TicketList } from "doc-bot/components/TicketList/TicketList";
import { TicketDetails } from "doc-bot/components/TicketDetails/TicketDetails";
import { AtlassianLoginModal } from "doc-bot/components/AtlassianLoginModal/AtlassianLoginModal";

export const Atlassian = () => {
  const classes = useAtlassianStyles();
  const {
    isLoggedIn,
    setIsLoggedIn,
    tickets,
    selectedTicket,
    handleTicketSelect,
    handleSearch,
    showAllTickets,
    isLoginModalOpen,
    setIsLoginModalOpen,
  } = useAtlassian();

  return (
    <Box className={classes.root}>
      {/* Header with User Icon */}
      <AtlassianHeader 
        isLoggedIn={isLoggedIn}
        onUserIconClick={() => setIsLoginModalOpen(true)}
      />

      {/* Main Content */}
      <Box className={classes.content}>
        {!selectedTicket ? (
          <>
            {/* Search Bar */}
            <AtlassianSearchBar 
              onSearch={handleSearch}
              onShowAll={showAllTickets}
            />

            {/* Ticket List */}
            <TicketList 
              tickets={tickets}
              onTicketSelect={handleTicketSelect}
            />
          </>
        ) : (
          /* Ticket Details */
          <TicketDetails 
            ticket={selectedTicket}
            onBack={() => handleTicketSelect(null)}
          />
        )}
      </Box>

      {/* Login Modal */}
      <AtlassianLoginModal
        open={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={(credentials: AtlassianCredentials) => {
          setIsLoggedIn(true);
          setIsLoginModalOpen(false);
        }}
      />
    </Box>
  );
};
