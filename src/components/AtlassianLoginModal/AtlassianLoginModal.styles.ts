import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useAtlassianLoginModalStyles = makeStyles((theme: Theme) => ({
  dialog: {
    "& .MuiDialog-paper": {
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    },
  },
  title: {
    padding: theme.spacing(3, 3, 1, 3),
  },
  titleContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleLeft: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
  },
  content: {
    padding: theme.spacing(1, 3, 2, 3),
  },
  description: {
    color: "#64748b",
    marginBottom: theme.spacing(3),
    lineHeight: 1.5,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2.5),
    marginBottom: theme.spacing(3),
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "&.Mui-focused fieldset": {
        borderColor: "#0052cc",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#0052cc",
    },
  },
  infoBox: {
    backgroundColor: "#f8fafc",
    padding: theme.spacing(2),
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  infoText: {
    color: "#64748b",
    lineHeight: 1.4,
  },
  actions: {
    padding: theme.spacing(2, 3, 3, 3),
    gap: theme.spacing(1),
  },
  cancelButton: {
    color: "#64748b",
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#f1f5f9",
    },
  },
  connectButton: {
    backgroundColor: "#0052cc",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: "8px",
    padding: theme.spacing(1, 2.5),
    "&:hover": {
      backgroundColor: "#0747a6",
    },
    "&:disabled": {
      backgroundColor: "#e2e8f0",
      color: "#94a3b8",
    },
  },
}));
