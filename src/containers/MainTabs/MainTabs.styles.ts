import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useMainTabsStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  tabContainer: {
    position: "fixed",
    top: theme.spacing(2),
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1300,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none",
  },
  tabs: {
    backgroundColor: "#f8fafc",
    borderRadius: "16px",
    padding: "4px",
    minHeight: "60px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    border: "1px solid #e2e8f0",
    pointerEvents: "auto",
    "& .MuiTabs-flexContainer": {
      gap: "4px",
    },
  },
  tab: {
    minHeight: "52px",
    borderRadius: "12px",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 600,
    color: "#64748b",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    minWidth: "120px",
    "& .MuiTab-iconWrapper": {
      marginBottom: "4px",
    },
    "&:hover": {
      backgroundColor: "#e2e8f0",
      color: "#475569",
    },
  },
  activeTab: {
    backgroundColor: "#ffffff !important",
    color: "#3b82f6 !important",
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "#ffffff !important",
      color: "#3b82f6 !important",
    },
  },
  content: {
    flex: 1,
    overflow: "hidden", // Let child components handle their own scrolling
    height: "100vh",
  },
}));
