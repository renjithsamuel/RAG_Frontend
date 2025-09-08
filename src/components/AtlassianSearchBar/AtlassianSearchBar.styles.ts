import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useAtlassianSearchBarStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  searchContainer: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
  searchField: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      "& fieldset": {
        borderColor: "#e2e8f0",
      },
      "&:hover fieldset": {
        borderColor: "#0052cc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0052cc",
      },
    },
  },
  searchButton: {
    backgroundColor: "#0052cc",
    color: "#ffffff",
    borderRadius: "8px",
    padding: theme.spacing(1.5, 3),
    textTransform: "none",
    fontWeight: 600,
    minWidth: "100px",
    "&:hover": {
      backgroundColor: "#0747a6",
    },
  },
  showAllButton: {
    alignSelf: "flex-start",
    borderColor: "#0052cc",
    color: "#0052cc",
    borderRadius: "8px",
    padding: theme.spacing(1, 2),
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#f4f5f7",
      borderColor: "#0747a6",
    },
  },
}));
