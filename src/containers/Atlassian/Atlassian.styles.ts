import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useAtlassianStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8fafc",
  },
  content: {
    flex: 1,
    padding: theme.spacing(3),
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "calc(100vh - 140px)", // Account for header + tab space
    overflow: "auto",
    marginTop: theme.spacing(8), // Space for the floating tabs
  },
}));
