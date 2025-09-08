import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useTicketDetailsStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: theme.spacing(0, 2, 4, 2), // Extra bottom padding
    height: "100%",
    overflow: "auto",
    paddingTop: theme.spacing(2),
    // Custom scrollbar styles
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#c1c1c1",
      borderRadius: "4px",
      "&:hover": {
        background: "#a8a8a8",
      },
    },
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  backButton: {
    color: "#0052cc",
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#f4f5f7",
    },
  },
  ticketCard: {
    marginBottom: theme.spacing(3),
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  ticketHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
    flexWrap: "wrap",
    gap: theme.spacing(2),
  },
  ticketId: {
    color: "#0052cc",
    fontWeight: 700,
  },
  chips: {
    display: "flex",
    gap: theme.spacing(1),
    flexWrap: "wrap",
  },
  ticketTitle: {
    marginBottom: theme.spacing(2),
    color: "#172b4d",
    fontWeight: 600,
  },
  description: {
    marginBottom: theme.spacing(3),
    color: "#42526e",
    lineHeight: 1.6,
  },
  metaInfo: {
    display: "flex",
    gap: theme.spacing(3),
    flexWrap: "wrap",
    "& .MuiTypography-root": {
      color: "#64748b",
    },
  },
  manualCard: {
    marginBottom: theme.spacing(4), // Increased spacing between cards
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
    color: "#0052cc",
  },
  sectionTitle: {
    fontWeight: 600,
    color: "#172b4d",
  },
  overview: {
    marginBottom: theme.spacing(3),
    color: "#42526e",
    lineHeight: 1.6,
    fontSize: "1.1rem",
  },
  accordion: {
    marginBottom: theme.spacing(2),
    borderRadius: "8px !important",
    border: "1px solid #e2e8f0",
    "&:before": {
      display: "none",
    },
    "& .MuiAccordionDetails-root": {
      maxHeight: "400px",
      overflow: "auto",
      padding: theme.spacing(2),
      // Custom scrollbar for accordion content
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
        borderRadius: "3px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#c1c1c1",
        borderRadius: "3px",
        "&:hover": {
          background: "#a8a8a8",
        },
      },
    },
  },
  accordionTitle: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  resourceCard: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  codeSnippet: {
    marginBottom: theme.spacing(3),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  snippetTitle: {
    marginBottom: theme.spacing(1),
    fontWeight: 600,
    color: "#172b4d",
  },
  codeBlock: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: theme.spacing(2),
    overflow: "auto",
    "& pre": {
      margin: 0,
      fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#2d3748",
    },
  },
}));
