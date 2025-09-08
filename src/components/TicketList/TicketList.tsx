"use client";
import { Box, Card, CardContent, Typography, Chip, Grid } from "@mui/material";
import { useTicketListStyles } from "./TicketList.styles";
import { JiraTicket } from "doc-bot/entity/JiraTicket/JiraTicket";
import { FiArrowRight } from "react-icons/fi";

interface TicketListProps {
  tickets: JiraTicket[];
  onTicketSelect: (ticket: JiraTicket) => void;
}

export const TicketList = ({ tickets, onTicketSelect }: TicketListProps) => {
  const classes = useTicketListStyles();

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "critical":
        return "#d32f2f";
      case "high":
        return "#f57c00";
      case "medium":
        return "#1976d2";
      case "low":
        return "#388e3c";
      default:
        return "#757575";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "bug":
        return "#d32f2f";
      case "story":
        return "#1976d2";
      case "task":
        return "#388e3c";
      case "epic":
        return "#9c27b0";
      default:
        return "#757575";
    }
  };

  if (tickets.length === 0) {
    return (
      <Box className={classes.emptyState}>
        <Typography variant="h6" color="textSecondary">
          No tickets found
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Search for a specific ticket or show all tickets to get started
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Tickets ({tickets.length})
      </Typography>
      
      <Grid container spacing={2}>
        {tickets.map((ticket) => (
          <Grid item xs={12} md={6} lg={4} key={ticket.id}>
            <Card 
              className={classes.ticketCard}
              onClick={() => onTicketSelect(ticket)}
            >
              <CardContent className={classes.cardContent}>
                <Box className={classes.header}>
                  <Typography variant="subtitle1" className={classes.ticketId}>
                    {ticket.id}
                  </Typography>
                  <FiArrowRight className={classes.arrowIcon} />
                </Box>
                
                <Typography variant="h6" className={classes.ticketTitle}>
                  {ticket.title}
                </Typography>
                
                <Box className={classes.chips}>
                  <Chip 
                    label={ticket.type}
                    size="small"
                    sx={{ 
                      backgroundColor: getTypeColor(ticket.type),
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                  <Chip 
                    label={ticket.priority}
                    size="small"
                    sx={{ 
                      backgroundColor: getPriorityColor(ticket.priority),
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                  <Chip 
                    label={ticket.status}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: "#0052cc", color: "#0052cc" }}
                  />
                </Box>
                
                <Typography variant="body2" className={classes.assignee}>
                  Assigned to: {ticket.assignee}
                </Typography>
                
                <Typography variant="body2" className={classes.sprint}>
                  {ticket.sprint} • {ticket.storyPoints} SP
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
