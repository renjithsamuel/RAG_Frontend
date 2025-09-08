import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useTicketListStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    color: "#172b4d",
  },
  emptyState: {
    textAlign: "center",
    padding: theme.spacing(8),
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  ticketCard: {
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
      borderColor: "#0052cc",
    },
  },
  cardContent: {
    padding: theme.spacing(2.5),
    "&:last-child": {
      paddingBottom: theme.spacing(2.5),
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  ticketId: {
    fontWeight: 600,
    color: "#0052cc",
  },
  arrowIcon: {
    color: "#64748b",
    transition: "color 0.2s ease-in-out",
    "$ticketCard:hover &": {
      color: "#0052cc",
    },
  },
  ticketTitle: {
    marginBottom: theme.spacing(2),
    color: "#172b4d",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.4,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  chips: {
    display: "flex",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    flexWrap: "wrap",
  },
  assignee: {
    color: "#64748b",
    marginBottom: theme.spacing(0.5),
  },
  sprint: {
    color: "#64748b",
    fontSize: "0.875rem",
  },
}));
