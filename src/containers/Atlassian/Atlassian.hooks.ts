import { useState } from "react";
import { mockJiraTickets } from "doc-bot/entity/JiraTicket/JiraTicket.mock";
import { JiraTicket } from "doc-bot/entity/JiraTicket/JiraTicket";

export interface AtlassianCredentials {
  username: string;
  pat: string;
}

export const useAtlassian = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tickets, setTickets] = useState<JiraTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<JiraTicket | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleTicketSelect = (ticket: JiraTicket | null) => {
    setSelectedTicket(ticket);
  };

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setTickets([]);
      return;
    }

    const filteredTickets = mockJiraTickets.filter(ticket =>
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTickets(filteredTickets);
  };

  const showAllTickets = () => {
    setTickets(mockJiraTickets);
  };

  return {
    isLoggedIn,
    setIsLoggedIn,
    tickets,
    selectedTicket,
    handleTicketSelect,
    handleSearch,
    showAllTickets,
    isLoginModalOpen,
    setIsLoginModalOpen,
  };
};
