import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useAtlassianHeaderStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 4),
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  logo: {
    color: "#0052cc",
  },
  title: {
    fontWeight: 600,
    color: "#172b4d",
  },
  userButton: {
    padding: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: "#f4f5f7",
    },
  },
  avatar: {
    backgroundColor: "#0052cc",
    width: 40,
    height: 40,
    "& svg": {
      color: "#ffffff",
    },
  },
}));
